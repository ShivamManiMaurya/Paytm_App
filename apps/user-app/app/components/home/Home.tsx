"use client";

import { useMemo, useState } from "react";
import { tranferShapes } from "../../lib/types/transferShapes";
import TransactionsData from "../common/TransactionsData";
import { all } from "axios";
import FilterBtns from "../common/FilterBtns";
import { EFilters } from "../../lib/types/types";
import filterFn from "../../lib/helpers/filterFn";

interface IProps {
  balance: tranferShapes.TBalance;
  allTransactions: tranferShapes.allTransactions;
}

export default function Home({ balance, allTransactions }: IProps) {
  const [filter, setFilter] = useState<EFilters>(EFilters.ALL);

  console.log("balance = ", balance);

  const filterTransactions = useMemo(() => {
    return filterFn(filter, allTransactions);
  }, [allTransactions, filter]);

  console.log("filter = ", filterTransactions);

  return (
    <main className="h-[calc(100vh-7.7vh)] w-[100%] bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className=" space-y-8">
        {/* Balance Card */}
        <section className="w-full bg-white rounded-2xl shadow-md px-6 py-8 text-center">
          <h2 className="text-gray-500 text-sm md:text-base">
            Current Balance
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            ₹ {balance.amount / 100}
          </p>
        </section>

        {/* Action Buttons */}
        <FilterBtns setFilter={setFilter} />

        {/* Recent Transactions */}
        <section className="w-full px- 3-8">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">
            Recent Transactions
          </h3>
          <TransactionsData allTransactions={filterTransactions.slice(0, 5)} />
        </section>
      </div>
    </main>
  );
}
