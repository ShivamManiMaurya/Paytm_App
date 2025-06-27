import React from "react";
import TransactionsPage from "../../../components/transactions/Index";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/index";
import { ExtendedSession } from "../../../lib/types/types";
import {
  getOnRampTransactions,
  getP2PTransactions,
} from "../../../lib/data/transferData";

const Transactions = async () => {
  const transactions = await getOnRampTransactions();
  const p2pTransactions = await getP2PTransactions();

  console.log("p2p = ", p2pTransactions, " txns = ", transactions);

  return (
    <TransactionsPage
      transactions={transactions}
      p2pTransactions={p2pTransactions.data}
    />
  );
};

export default Transactions;
