"use client";
import React, { useMemo, useState } from "react";
import { Button } from "@repo/ui/button";
import { createOnRampTransaction } from "../../lib/actions/createOnRampTransaction";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import PrimaryLoader from "../common/PrimaryLoader";
import Loader from "../common/Loader";

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
  const router = useRouter();

  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const [provider, setProvider] = useState("");
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const selectedBank = SUPPORTED_BANKS.find((x) => x.name === selectedName);
    setRedirectUrl(selectedBank?.redirectUrl || "");
    setProvider(selectedBank?.name || "");
  };

  const handleAddMoney = async () => {
    setLoading(true);
    const response = await createOnRampTransaction(provider, value);
    // window.location.href = redirectUrl || "";

    if (response.status >= 200 && response.status <= 210) {
      toast.success(response.message ?? "Transaction successfull.");

      router.refresh();
    } else {
      toast.error(response.message + " status: " + response.status);
    }

    setLoading(false);
  };

  const isDisabled = useMemo(() => {
    return loading || provider === "" || value === 0;
  }, [loading, provider, value]);

  return (
    <div className="w-full bg-white rounded-xl shadow p-4 space-y-4">
      <h2 className="text-lg font-semibold p-0 text-gray-800">Add Money</h2>

      <div className="mb-2">
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

      <Button
        variant="contained"
        onClick={handleAddMoney}
        styles={`w-full ${isDisabled ? "bg-gray-400" : "bg-blue-600"}`}
        disable={isDisabled}>
        {loading ? <Loader /> : "Add Money"}
      </Button>
    </div>
  );
};
