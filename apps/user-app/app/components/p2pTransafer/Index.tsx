"use client";

import { Button } from "@repo/ui/button";
import React, { useMemo, useState } from "react";
import { p2pTransfer } from "../../lib/actions/p2pTransfer";
import { toast } from "react-toastify";
import Loader from "../common/PrimaryLoader";

const P2PTransactions = () => {
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMoney = async () => {
    setLoading(true);
    const res = await p2pTransfer(number, amount);

    if (res.status >= 200 && res?.status <= 210) {
      toast.success("Transaction successfull.");
    } else {
      toast.error(
        (res.message || "Something went wrong.") + " status: " + res.status
      );
    }
    setLoading(false);
  };

  const isDisabled = useMemo(() => {
    return amount === 0 || number === "" || loading;
  }, [amount, number, loading]);

  return (
    <div className="h-[calc(100vh-4rem)] w-full bg-gray-100 p-8">
      <div className="m-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Person to person transfer
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Need to send someone money? Do it in seconds.
        </p>
      </div>
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
        <Button
          variant="contained"
          onClick={handleSendMoney}
          styles={`w-full ${isDisabled ? "bg-gray-400" : "bg-blue-600"}`}
          disable={isDisabled}>
          {loading ? <Loader /> : "Send Money"}
        </Button>
      </div>
    </div>
  );
};

export default P2PTransactions;
