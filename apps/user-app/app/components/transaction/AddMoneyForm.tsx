"use client";
import React from "react";
import { Button } from "@repo/ui/button";

export const AddMoneyForm = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Add Money</h2>

      <div className="space-y-2">
        <label className="text-sm text-gray-600">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-600">Bank</label>
        <select className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300">
          <option>HDFC Bank</option>
          <option>SBI</option>
          <option>ICICI</option>
        </select>
      </div>

      <Button variant="contained" onClick={() => {}}>
        Add Money
      </Button>
    </div>
  );
};
