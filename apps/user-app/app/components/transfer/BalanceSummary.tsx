"use client";
import React from "react";

export const BalanceSummary = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow p-6 space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">Balance</h2>
      <div className="text-sm text-gray-700 flex justify-between">
        <span>Unlocked balance</span>
        <span>200 INR</span>
      </div>
      <div className="text-sm text-gray-700 flex justify-between">
        <span>Total Locked Balance</span>
        <span>0 INR</span>
      </div>
      <div className="text-sm text-gray-700 flex justify-between font-medium">
        <span>Total Balance</span>
        <span>200 INR</span>
      </div>
    </div>
  );
};
