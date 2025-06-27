"use client";
import React, { useMemo } from "react";
import { tranferShapes } from "../../lib/types/transferShapes";
import moment from "moment";
import { OnRampStatus } from "../../lib/types/types";
import {
  HiCheckCircle,
  HiClock,
  HiXCircle,
  HiQuestionMarkCircle,
} from "react-icons/hi";

interface IProps {
  transactions: tranferShapes.TTxn[];
}

export const getStatusStyles = (status: OnRampStatus) => {
  switch (status) {
    case OnRampStatus.Success:
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        icon: <HiCheckCircle className="w-4 h-4" />,
        label: "Success",
      };
    case OnRampStatus.Processing:
      return {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        icon: <HiClock className="w-4 h-4" />,
        label: "Processing",
      };
    case OnRampStatus.Failure:
      return {
        bg: "bg-red-100",
        text: "text-red-700",
        icon: <HiXCircle className="w-4 h-4" />,
        label: "Failed",
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-600",
        icon: <HiQuestionMarkCircle className="w-4 h-4" />,
        label: "Unknown",
      };
  }
};

export const RecentTransactions: React.FC<IProps> = ({ transactions }) => {
  const trxn = useMemo(
    () => transactions.slice().reverse().slice(0, 5),
    [transactions]
  );

  return (
    <div className="w-full h-[72%] bg-white rounded-xl shadow p-6 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex-shrink-0">
        Recent Additions
      </h2>
      <div className="flex-1 overflow-y-auto space-y-4 min-h-0">
        {trxn.map((txn) => {
          const { bg, text, icon, label } = getStatusStyles(txn.status);
          const isFailed = txn.status === OnRampStatus.Failure;

          return (
            <div
              key={txn.id}
              className="flex justify-between items-center text-sm text-gray-800 px-3 py-2 rounded-md border border-gray-100 hover:bg-gray-50 transition">
              {/* Left: Info */}
              <div className="flex flex-col">
                <span className="font-medium">Received INR</span>
                <span className="text-xs text-gray-500">
                  {moment(txn.startTime).format("ddd MMM DD YYYY, hh:mm A")}
                </span>
              </div>

              {/* Center: Status badge */}
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${bg} ${text}`}>
                {icon}
                <span>{label}</span>
              </div>

              {/* Right: Amount */}
              <div
                className={`text-base font-semibold ${
                  txn.status === OnRampStatus.Success
                    ? "text-green-600"
                    : txn.status === OnRampStatus.Processing
                      ? "text-yellow-600"
                      : "text-red-600"
                }`}>
                {txn.status === OnRampStatus.Failure
                  ? `- Rs ${txn.amount / 100}`
                  : `+ Rs ${txn.amount / 100}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
