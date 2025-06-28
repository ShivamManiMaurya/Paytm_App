import React from "react";
import { ArrowUpRight, ArrowDownLeft, PlusCircle } from "lucide-react";
import { tranferShapes } from "../../lib/types/transferShapes";
import { getStatusStyles } from "../transfer/RecentTransaction";
import { OnRampStatus } from "../../lib/types/types";

interface IProps {
  allTransactions: tranferShapes.allTransactions;
}

const TransactionsData: React.FC<IProps> = ({ allTransactions }) => {
  return allTransactions.length === 0 ? (
    <section className="bg-white rounded-2xl text-center text-2xl text-gray-400 shadow-md p-6 overflow-x-auto">
      No transactions available.
    </section>
  ) : (
    <section className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
      <div className="max-h-[65vh] overflow-y-auto">
        <table className="w-full text-sm md:text-base">
          <thead className="sticky top-0 bg-white">
            <tr className="text-left border-b border-gray-200">
              <th className="py-2">Name</th>
              <th className="py-2">Status</th>
              <th className="py-2">Type</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {allTransactions.map((tx) => {
              const statusStyle =
                tx.source === "Bank" && "status" in tx
                  ? getStatusStyles(tx.status)
                  : getStatusStyles(OnRampStatus.Success);
              const isFromUser =
                tx.source === "P2P" &&
                "fromUserDetails" in tx &&
                tx.fromUserDetails.isFromUser;
              return (
                <tr
                  key={tx.id + tx.source}
                  className="border-b last:border-b-0">
                  <td className="py-3">
                    {tx.source === "Bank" && "provider" in tx
                      ? `Added via NetBanking from ${tx.provider}`
                      : tx.source === "P2P" && "fromUserDetails" in tx
                        ? tx.fromUserDetails.isFromUser
                          ? `Sent to ${"toUserDetails" in tx ? tx.toUserDetails.name : "Unknown"}`
                          : `Received from ${tx.fromUserDetails.name}`
                        : "Unknown Transaction"}
                  </td>
                  <td className="pr-6">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${statusStyle.bg} ${statusStyle.text}`}>
                      {statusStyle.icon}
                      <span>{statusStyle.label}</span>
                    </div>
                  </td>
                  <td className="py-3 capitalize flex items-center gap-2">
                    {tx.source === "Bank" && (
                      <>
                        <PlusCircle size={16} className="text-purple-600" />
                        <span className="text-gray-700">add</span>
                      </>
                    )}
                    {tx.source === "P2P" && "fromUserDetails" in tx && (
                      <>
                        {tx.fromUserDetails.isFromUser ? (
                          <>
                            <ArrowUpRight size={16} className="text-blue-600" />
                            <span className="text-gray-700">send</span>
                          </>
                        ) : (
                          <>
                            <ArrowDownLeft
                              size={16}
                              className="text-green-600"
                            />
                            <span className="text-gray-700">receive</span>
                          </>
                        )}
                      </>
                    )}
                  </td>
                  <td
                    className={`py-3 font-semibold ${isFromUser ? "text-red-600" : "text-green-600"}`}>
                    {isFromUser ? "-" : "+"}₹{" "}
                    {tx.source === "Bank"
                      ? Math.abs(tx.amount / 100).toLocaleString()
                      : Math.abs(tx.amount).toLocaleString()}
                  </td>
                  <td className="py-3 text-gray-500">
                    {tx.date.format("ddd MMM DD YYYY, hh:mm A").toString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionsData;
