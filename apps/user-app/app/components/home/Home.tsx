"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, Plus } from "lucide-react";

export default function Home() {
  const [balance, setBalance] = useState(12500.75);

  const transactions = [
    { id: 1, name: "Sent to Raj", amount: -250.0, date: "June 17, 2025" },
    {
      id: 2,
      name: "Received from Shivam",
      amount: 1500.0,
      date: "June 16, 2025",
    },
    { id: 3, name: "Added from UPI", amount: 1000.0, date: "June 15, 2025" },
  ];

  return (
    <main className="h-[calc(100vh-7.7vh)] w-[100%] bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className=" space-y-8">
        {/* Balance Card */}
        <section className="w-full bg-white rounded-2xl shadow-md px-6 py-8 text-center">
          <h2 className="text-gray-500 text-sm md:text-base">
            Current Balance
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            ₹ {balance.toLocaleString()}
          </p>
        </section>

        {/* Action Buttons */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <button className="bg-blue-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow hover:bg-blue-700 transition text-base sm:text-lg">
            <ArrowUpRight size={20} /> Send
          </button>
          <button className="bg-green-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow hover:bg-green-700 transition text-base sm:text-lg">
            <ArrowDownLeft size={20} /> Receive
          </button>
          <button className="bg-purple-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow hover:bg-purple-700 transition text-base sm:text-lg">
            <Plus size={20} /> Add
          </button>
        </section>

        {/* Recent Transactions */}
        <section className="w-full bg-white rounded-2xl shadow-md px-6 py-8">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">
            Recent Transactions
          </h3>
          <ul className="space-y-4">
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className="flex justify-between items-center text-sm md:text-base border-b pb-3 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-800">{tx.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{tx.date}</p>
                </div>
                <p
                  className={`font-semibold ${
                    tx.amount < 0 ? "text-red-600" : "text-green-600"
                  }`}>
                  {tx.amount < 0 ? "-" : "+"}₹{" "}
                  {Math.abs(tx.amount).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
