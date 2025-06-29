"use server";

import { getServerSession } from "next-auth";
import { ExtendedSession } from "../types/types";
import { authOptions } from "../auth";
import prisma from "@repo/db/index";
import { Some } from "../helpers/Some";
import { errorResponse, successResponse } from "../response";

export async function createAutoWebhook(isAutoWebhook: boolean) {
  try {
    const session = (await getServerSession(
      authOptions
    )) as ExtendedSession | null;

    if (!session?.user || !session.user.id) {
      return {
        success: false,
        message: "Unauthenticated request.",
        status: 401,
      };
    }

    const res = await prisma.userAutoWebhook.upsert({
      where: {
        userId: Some.Number(session?.user?.id),
      },
      update: {
        isAutoWebhook: isAutoWebhook,
      },
      create: {
        isAutoWebhook: isAutoWebhook,
        userId: Some.Number(session?.user?.id),
      },
    });

    return successResponse(
      {
        id: res.id,
        isAutoWebhook: res.isAutoWebhook,
        userId: res.userId,
      },
      "Auto webhook updated successfully.",
      201
    );
  } catch (error) {
    console.log("error = ", error);
    return errorResponse("Server error", 500);
  }
}
