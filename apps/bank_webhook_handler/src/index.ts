import express from "express";
import db from "@repo/db/index";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config({ path: "../../packages/db/.env" });

const app = express();
app.use(cors());
app.use(express.json());

enum OnRampStatus {
  Success = "Success",
  Failure = "Failure",
  Processing = "Processing",
}

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInformation: {
    token: string;
    userId: string;
    amount: string;
    status: OnRampStatus;
  } = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
    status: req.body.status,
  };

  if (
    !paymentInformation.token ||
    !paymentInformation.userId ||
    !paymentInformation.amount ||
    !paymentInformation.status
  ) {
    res.status(400).json({
      message: "Params missing.",
    });
    return;
  }

  if (paymentInformation.status !== OnRampStatus.Processing) {
    res.status(409).json({
      message: "Conflict: Payment has already been completed.",
    });
    return;
  }

  try {
    await db.$transaction(async (tx) => {
      const existing = await tx.balance.findUnique({
        where: { userId: Number(paymentInformation.userId) },
      });

      await tx.balance.upsert({
        where: { userId: Number(paymentInformation.userId) },
        update: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
        create: {
          userId: Number(paymentInformation.userId),
          amount: Number(paymentInformation.amount),
          locked: 0,
        },
      });

      await tx.onRampTransaction.update({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      });
    });

    res.json({
      message: "Captured",
    });
  } catch (error) {
    console.log("err = ", error);
    res.status(411).json({
      message: "Error while processing webhook.",
    });
  }
});

function startServer(port: number) {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

startServer(3001);
