"use client";

import React from "react";
import { AddMoneyForm } from "./AddMoneyForm";
import { BalanceSummary } from "./BalanceSummary";
import { RecentTransactions } from "./RecentTransaction";
import { useSidebarLoadingStore } from "@repo/store";
import Skeleton from "./Skeleton";
import PrimaryLoader from "../common/PrimaryLoader";
import { tranferShapes } from "../../lib/types/transferShapes";

interface IProps {
  balance: tranferShapes.TBalance;
  transactions: tranferShapes.TTxn[];
}

const TransferPage: React.FC<IProps> = ({ balance, transactions }) => {
  const { loading } = useSidebarLoadingStore();

  return loading ? (
    <PrimaryLoader />
  ) : (
    <div className="h-[calc(100vh-4rem)] w-full bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-purple-600 mb-6">Transfer</h1>

      <div className="flex gap-6">
        {/* Left: Add Money Form */}
        <div className="w-1/2">
          <AddMoneyForm />
        </div>

        {/* Right: Balance + Transactions */}
        <div className="w-1/2 space-y-4">
          <BalanceSummary />
          <RecentTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
