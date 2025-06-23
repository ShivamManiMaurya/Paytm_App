"use client";
import React, { useState } from "react";
import { Button } from "@repo/ui/button";
import { createOnRampTransaction } from "../../lib/actions/createOnRampTransaction";
import { toast } from "react-toastify";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
];

export const AddMoneyForm = () => {
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  const [value, setValue] = useState(0);

  const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const selectedBank = SUPPORTED_BANKS.find((x) => x.name === selectedName);
    setRedirectUrl(selectedBank?.redirectUrl || "");
    setProvider(selectedBank?.name || "");
  };

  const handleAddMoney = async () => {
    const response = await createOnRampTransaction(provider, value);
    // window.location.href = redirectUrl || "";

    if (response.status >= 200 && response.status <= 210) {
      toast.success(response.message ?? "Transaction successfull.");
    } else {
      toast.error(response.message + " status: " + response.status);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Add Money</h2>

      <div className="space-y-2">
        <label className="text-sm text-gray-600">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-600">Bank</label>
        <select
          onChange={handleBankChange}
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300">
          <option value="">Select Bank</option>
          {SUPPORTED_BANKS.map((bank) => (
            <option key={bank.name} value={bank.name}>
              {bank.name}
            </option>
          ))}
        </select>
      </div>

      <Button variant="contained" onClick={handleAddMoney}>
        Add Money
      </Button>
    </div>
  );
};
