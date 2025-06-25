"use client";
import React from "react";
import { tranferShapes } from "../../lib/types/transferShapes";

interface IProps {
  balance: tranferShapes.TBalance;
}

export const BalanceSummary: React.FC<IProps> = ({ balance }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow p-6 space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">Balance</h2>
      <div className="text-sm text-gray-700 flex justify-between">
        <span>Unlocked balance</span>
        <span>{balance.amount / 100} INR</span>
      </div>
      <div className="text-sm text-gray-700 flex justify-between">
        <span>Total Locked Balance</span>
        <span>{balance.locked / 100} INR</span>
      </div>
      <div className="text-sm text-gray-700 flex justify-between font-medium">
        <span>Total Balance</span>
        <span>{(balance.amount + balance.locked) / 100} INR</span>
      </div>
    </div>
  );
};
