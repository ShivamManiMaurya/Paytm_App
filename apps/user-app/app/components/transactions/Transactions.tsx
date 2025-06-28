"use client";

import { useMemo, useState } from "react";
import { tranferShapes } from "../../lib/types/transferShapes";
import { EFilters } from "../../lib/types/types";
import FilterBtns from "../common/FilterBtns";
import TransactionsData from "../common/TransactionsData";
import filterFn from "../../lib/helpers/filterFn";

type Transaction = {
  id: number;
  name: string;
  type: "send" | "receive" | "add";
  amount: number;
  date: string;
};

interface IProps {
  allTransactions: tranferShapes.allTransactions;
}

export default function TransactionsPage({ allTransactions }: IProps) {
  const [filter, setFilter] = useState<EFilters>(EFilters.ALL);

  const filterTransactions = useMemo(() => {
    return filterFn(filter, allTransactions);
  }, [allTransactions, filter]);

  return (
    <main className=" w-[100%] bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className=" max-w-5xl mx-auto space-y-6">
        {/* Page Title */}
        <div className=" flex justify-between items-center">
          <div className=" w-[40%]">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Transaction History
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              Track your wallet activity here.
            </p>
          </div>
          {/* Filter buttons  */}
          <div className=" w-[60%]">
            <FilterBtns setFilter={setFilter} />
          </div>
        </div>

        {/* Transaction List */}
        <TransactionsData allTransactions={filterTransactions} />
      </div>
    </main>
  );
}
