"use server";

import prisma from "@repo/db/index";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { v4 as uuidv4 } from "uuid";
import { errorResponse, successResponse } from "../response";
import { ActionResponse, ExtendedSession } from "../types/types";

export async function createOnRampTransaction(
  provider: string,
  amount: number
): Promise<ActionResponse> {
  try {
    const uniqueId = uuidv4();
    const session = (await getServerSession(
      authOptions
    )) as ExtendedSession | null;

    console.log("session = ", session);

    // FIXED: Make this response consistent with others
    if (!session?.user || !session.user.id) {
      return {
        success: false,
        message: "Unauthenticated request.",
        status: 401,
      };
    }

    if (!provider || provider.trim() === "") {
      return errorResponse("Missing required fields", 400);
    }

    if (!amount || amount <= 0) {
      return errorResponse("Amount must be greater than 0.", 400);
    }

    const token = uniqueId;
    const transaction = await prisma.onRampTransaction.create({
      data: {
        provider,
        status: "Processing",
        token,
        startTime: new Date(),
        userId: Number(session.user.id),
        amount: amount * 100,
      },
    });

    return successResponse(
      {
        transactionId: transaction.id,
        token: uniqueId,
        amount,
        provider: provider.toUpperCase(),
      },
      "Transaction created successfully.",
      201
    );
  } catch (error: any) {
    if (error.code === "P2002") {
      return errorResponse("Duplicate transaction", 409);
    }
    console.log("err = ", error);
    return errorResponse("Server error", 500);
  }
}
