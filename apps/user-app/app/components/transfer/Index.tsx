"use client";

import React from "react";
import { AddMoneyForm } from "./AddMoneyForm";
import { BalanceSummary } from "./BalanceSummary";
import { RecentTransactions } from "./RecentTransaction";
import { useSidebarLoadingStore } from "@repo/store";
import PrimaryLoader from "../common/PrimaryLoader";
import { tranferShapes } from "../../lib/types/transferShapes";
import NoteBox from "./NoteBox";

interface IProps {
  balance: tranferShapes.TBalance;
  transactions: tranferShapes.TTxn[];
  autoWebhook: tranferShapes.TAutoWebhook;
}

const TransferPage: React.FC<IProps> = ({
  balance,
  transactions,
  autoWebhook,
}) => {
  const { loading } = useSidebarLoadingStore();

  return loading ? (
    <PrimaryLoader />
  ) : (
    <div className="h-[calc(100vh-5rem)] w-full bg-gray-100 p-2">
      <div className=" flex justify-start items-baseline gap-2 m-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Transfer
        </h1>
        <p className="text-gray-500 mt-1 text-sm">Add money to your wallet.</p>
      </div>

      <div className="flex gap-6">
        {/* Left: Add Money Form */}
        <div className="w-1/2 space-y-2">
          <AddMoneyForm autoWebhook={autoWebhook} />
          <NoteBox transactions={transactions} autoWebhookRes={autoWebhook} />
        </div>

        {/* Right: Balance + Transactions */}
        <div className="w-1/2 space-y-4">
          <BalanceSummary balance={balance} />
          <RecentTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
