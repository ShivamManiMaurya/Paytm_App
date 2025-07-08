"use client";

import React, { useMemo } from "react";
import Home from "./Home";
import { useSidebarLoadingStore } from "@repo/store";
import Loader from "../common/PrimaryLoader";
import { tranferShapes } from "../../lib/types/transferShapes";
import getAllTransactions from "../../lib/helpers/getAllTransactions";

interface IProps {
  balance: tranferShapes.TBalance;
  transactions: tranferShapes.TTxn[];
  p2pTransactions: tranferShapes.TP2pTxns[];
}

const HomePage: React.FC<IProps> = ({
  balance,
  transactions,
  p2pTransactions,
}) => {
  const { loading } = useSidebarLoadingStore();

  const allTransactions = useMemo(() => {
    return getAllTransactions(p2pTransactions, transactions);
  }, [transactions, p2pTransactions]);

  return loading ? (
    <Loader />
  ) : (
    <Home balance={balance} allTransactions={allTransactions} />
  );
};

export default HomePage;
