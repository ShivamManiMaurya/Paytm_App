import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/index";
import { tranferShapes } from "../types/transferShapes";
import { ExtendedSession } from "../types/types";
import { Some } from "../helpers/Some";
import { toMaybe } from "../helpers/Maybe";

const getSession = async () => {
  const session = (await getServerSession(authOptions)) as ExtendedSession;
  return session;
};

export const getBalance = async () => {
  const session = await getSession();
  const balance = await prisma.balance.findUnique({
    where: { userId: Some.Number(session?.user?.id) },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  } as tranferShapes.TBalance;
};

export const getOnRampTransactions = async () => {
  const session = await getSession();
  const transactions = await prisma.onRampTransaction.findMany({
    where: { userId: Some.Number(session?.user?.id) },
  });
  return transactions.map((tx) => ({
    id: tx.id,
    amount: tx.amount,
    status: tx.status,
    startTime: tx.startTime,
    provider: tx.provider,
  })) as tranferShapes.TTxn[];
};

export const getP2PTransactions = async () => {
  try {
    const session = await getSession();
    const userId = Some.Number(session?.user?.id);
    const userName = session?.user?.name;

    const p2pTransactions = await prisma.p2pTransfer.findMany({
      where: {
        OR: [{ fromUserId: userId }, { toUserIds: userId }],
      },
    });

    const data = await Promise.all(
      p2pTransactions.map(async (tx) => {
        const isFromUser = tx.fromUserId === userId;
        const isToUser = tx.toUserIds === userId;

        let toUserDetails = null;
        let fromUserDetails = null;

        if (isFromUser) {
          toUserDetails = await prisma.user.findUnique({
            where: {
              id: tx.toUserIds,
            },
          });
        } else {
          fromUserDetails = await prisma.user.findUnique({
            where: {
              id: tx.fromUserId,
            },
          });
        }

        const fromUserDetail = isFromUser
          ? { isFromUser: true, name: userName ?? "" }
          : {
              isFromUser: false,
              name: toMaybe(fromUserDetails).get("name").unwrapOr(""),
            };
        const toUserDetail = isToUser
          ? { isToUser: true, name: userName ?? "" }
          : {
              isToUser: false,
              name: toMaybe(toUserDetails).get("name").unwrapOr(""),
            };

        return {
          ...tx,
          toUserDetails: toUserDetail,
          fromUserDetails: fromUserDetail,
        } as tranferShapes.TP2pTxns;
      })
    );

    return {
      status: true,
      message: "Success",
      data: data,
    };
  } catch (error) {
    return {
      status: false,
      message: "Failed to get data.",
      data: [],
    };
  }
};
