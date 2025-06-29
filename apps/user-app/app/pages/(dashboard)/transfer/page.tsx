import React from "react";
import TransferPage from "../../../components/transfer/Index";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/index";
import { ExtendedSession } from "../../../lib/types/types";
import { tranferShapes } from "../../../lib/types/transferShapes";
import {
  getAutoWebhook,
  getBalance,
  getOnRampTransactions,
} from "../../../lib/data/transferData";

const Transfer = async () => {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();
  const autoWebhook = await getAutoWebhook();

  return (
    <TransferPage
      balance={balance}
      transactions={transactions}
      autoWebhook={autoWebhook}
    />
  );
};

export default Transfer;
