"use client";

import React from "react";
import TransactionsPage from "../../../components/transactions/Transactions";
import { useSidebarLoadingStore } from "@repo/store";
import Skeleton from "../../../components/transactions/Skeleton";

const Transactions = () => {
  const isLoading = useSidebarLoadingStore((state) => state.loading);

  return isLoading ? <Skeleton /> : <TransactionsPage />;
};

export default Transactions;
