import React from "react";
import TransferPage from "../../../components/transfer/Index";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/index";
import { ExtendedSession } from "../../../lib/types/types";
import { tranferShapes } from "../../../lib/types/transferShapes";
import {
  getBalance,
  getOnRampTransactions,
} from "../../../lib/data/transferData";

const Transfer = async () => {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return <TransferPage balance={balance} transactions={transactions} />;
};

export default Transfer;
