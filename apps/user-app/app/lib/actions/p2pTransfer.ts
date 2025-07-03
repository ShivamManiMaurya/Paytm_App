"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { ActionResponse, ExtendedSession } from "../types/types";
import { errorResponse, successResponse } from "../response";
import prisma from "@repo/db/index";
import { Some } from "./../helpers/Some";
import { toMaybe } from "../helpers/Maybe";

export const p2pTransfer = async (
  to: string,
  amount: number
): Promise<ActionResponse> => {
  try {
    const session =
      ((await getServerSession(authOptions)) as ExtendedSession) || null;
    const fromUser = session?.user.id;

    if (!fromUser) {
      return errorResponse("Error while sending", 403);
    }

    const toUser = await prisma.user.findUnique({
      where: {
        number: to,
      },
    });

    if (!toUser) {
      return errorResponse("Recipient User Not Found", 404);
    }

    if (
      Some.Number(fromUser) === Some.Number(toMaybe(toUser).get("id").unwrap())
    ) {
      return errorResponse(
        "Self-transfers aren't allowed. Please choose a different recipient."
      );
    }

    let transactionResult: ActionResponse = errorResponse(
      "Unknown error.",
      500
    );

    await prisma.$transaction(
      async (tx) => {
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(fromUser)} FOR UPDATE`;

        const fromBalance = await tx.balance.findUnique({
          where: {
            userId: Number(fromUser),
          },
        });

        if (!fromBalance || fromBalance.amount < amount) {
          transactionResult = errorResponse("Insufficient funds.", 402);
          return;
        }

        const resFrom = await tx.balance.update({
          where: {
            userId: Number(fromUser),
          },
          data: {
            amount: {
              decrement: amount,
            },
          },
        });

        if (!resFrom.id) {
          transactionResult = errorResponse("Amount not deducted.", 500);
          return;
        }

        await new Promise((r) => setTimeout(r, 4000));

        const resTo = await tx.balance.update({
          where: {
            userId: toUser.id,
          },
          data: {
            amount: {
              increment: amount,
            },
          },
        });

        if (!resTo.id) {
          transactionResult = errorResponse(
            "Amount not added to the user.",
            500
          );
          return;
        }

        await tx.p2pTransfer.create({
          data: {
            fromUserId: Number(fromUser),
            toUserIds: toUser.id,
            amount,
            timeStamp: new Date(),
          },
        });

        transactionResult = successResponse(
          "Transaction completed successfully."
        );
      },
      {
        timeout: 10000,
      }
    );

    return transactionResult;
  } catch (error) {
    console.log("err = ", error);
    return errorResponse("Server error", 500);
  }
};
