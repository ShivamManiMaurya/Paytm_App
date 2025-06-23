"use client";
import React from "react";
import { tranferShapes } from "../../lib/types/transferShapes";
import moment from "moment";

interface IProps {
  transactions: tranferShapes.TTxn[];
}

export const RecentTransactions: React.FC<IProps> = ({ transactions }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow p-6 space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">Recent Additions</h2>
      {transactions.map((txn) => (
        <div
          key={txn.id}
          className="text-sm text-gray-700 flex justify-between">
          <div>
            <div>Received INR</div>
            <div className="text-xs text-gray-500">
              {moment(txn.startTime).format("ddd MMM DD YYYY, hh:mm A")}
            </div>
          </div>
          <div className="font-medium text-green-600">
            + Rs {txn.amount / 100}
          </div>
        </div>
      ))}
    </div>
  );
};
