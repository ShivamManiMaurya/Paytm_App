"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, PlusCircle } from "lucide-react";

type Transaction = {
  id: number;
  name: string;
  type: "send" | "receive" | "add";
  amount: number;
  date: string;
};

const sampleTransactions: Transaction[] = [
  {
    id: 1,
    name: "Sent to Raj",
    type: "send",
    amount: -500,
    date: "June 18, 2025",
  },
  {
    id: 2,
    name: "Received from Shivam",
    type: "receive",
    amount: 800,
    date: "June 17, 2025",
  },
  {
    id: 3,
    name: "Added via UPI",
    type: "add",
    amount: 2000,
    date: "June 16, 2025",
  },
  {
    id: 4,
    name: "Sent to Aman",
    type: "send",
    amount: -150,
    date: "June 15, 2025",
  },
];

export default function TransactionsPage() {
  const [transactions] = useState<Transaction[]>(sampleTransactions);

  return (
    <main className=" w-[100%] bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className=" max-w-5xl mx-auto space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Transaction History
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Track your wallet activity here.
          </p>
        </div>

        {/* Transaction List */}
        <section className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-2">Name</th>
                <th className="py-2">Type</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b last:border-b-0">
                  <td className="py-3">{tx.name}</td>
                  <td className="py-3 capitalize flex items-center gap-2">
                    {tx.type === "send" && (
                      <ArrowUpRight size={16} className="text-blue-600" />
                    )}
                    {tx.type === "receive" && (
                      <ArrowDownLeft size={16} className="text-green-600" />
                    )}
                    {tx.type === "add" && (
                      <PlusCircle size={16} className="text-purple-600" />
                    )}
                    <span className="text-gray-700">{tx.type}</span>
                  </td>
                  <td
                    className={`py-3 font-semibold ${tx.amount < 0 ? "text-red-600" : "text-green-600"}`}>
                    {tx.amount < 0 ? "-" : "+"}₹{" "}
                    {Math.abs(tx.amount).toLocaleString()}
                  </td>
                  <td className="py-3 text-gray-500">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
