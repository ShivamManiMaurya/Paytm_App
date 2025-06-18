"use client";

import { Button } from "@repo/ui/button";
import React, { useState } from "react";
import { p2pTransfer } from "../../../lib/actions/p2pTransfer";
import { toast } from "react-toastify";

const P2PTransactions = () => {
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState("");

  const handleSendMoney = async () => {
    const res = await p2pTransfer(number, amount);

    if (res.status >= 200 && res?.status <= 210) {
      toast.success("Transaction successfull.");
    } else {
      toast.error(
        (res.message || "Something went wrong.") + " status: " + res.status
      );
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Send Money</h2>

      <div className="space-y-2">
        <label className="text-sm text-gray-600">Number</label>
        <input
          type="text"
          placeholder="1234567890"
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-gray-600">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <Button variant="contained" onClick={handleSendMoney}>
        Send Money
      </Button>
    </div>
  );
};

export default P2PTransactions;
