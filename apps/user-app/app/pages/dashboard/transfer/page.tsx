import React from "react";
import { AddMoneyForm } from "../../../components/transaction/AddMoneyForm";
import { BalanceSummary } from "../../../components/transaction/BalanceSummary";
import { RecentTransactions } from "../../../components/transaction/RecentTransaction";

const TransferPage = () => {
  return (
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
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
