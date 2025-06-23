import React from "react";
import TransactionsPage from "../../../components/transactions/Index";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/index";
import { ExtendedSession } from "../../../lib/types/types";

const getBalance = async () => {
  const session = (await getServerSession(authOptions)) as ExtendedSession;
  const balance = await prisma.balance.findUnique({
    where: {
      userId: Number(session?.user?.id),
    },
  });

  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
};

const getOnRampTransactions = async () => {
  const session = (await getServerSession(authOptions)) as ExtendedSession;
  const transactions = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session.user.id),
    },
  });

  return transactions.map((tx) => ({
    id: tx.id,
    amount: tx.amount,
    status: tx.status,
    startTime: tx.startTime,
    provider: tx.provider,
  }));
};

const Transactions = async () => {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return <TransactionsPage />;
};

export default Transactions;
