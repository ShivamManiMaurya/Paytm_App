"use client";
import React from "react";

export const RecentTransactions = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow p-6 space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">
        Recent Transactions
      </h2>
      <div className="text-sm text-gray-700 flex justify-between">
        <div>
          <div>Received INR</div>
          <div className="text-xs text-gray-500">Sat Mar 30 2024</div>
        </div>
        <div className="font-medium text-green-600">+ Rs 200</div>
      </div>
    </div>
  );
};
