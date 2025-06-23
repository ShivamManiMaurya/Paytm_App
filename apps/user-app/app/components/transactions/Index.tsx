"use client";

import React, { useEffect } from "react";
import TransactionsPage from "./Transactions";
import { useSidebarLoadingStore } from "@repo/store";
import Skeleton from "./Skeleton";
import Loader from "../common/Loader";
import PrimaryLoader from "../common/PrimaryLoader";

const Transactions = () => {
  const { loading } = useSidebarLoadingStore();

  return loading ? <PrimaryLoader /> : <TransactionsPage />;
};

export default Transactions;
