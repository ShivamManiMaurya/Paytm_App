"use client";

import React, { useMemo } from "react";
import TransactionsPage from "./Transactions";
import { useSidebarLoadingStore } from "@repo/store";
import PrimaryLoader from "../common/PrimaryLoader";
import { tranferShapes } from "../../lib/types/transferShapes";
import getAllTransactions from "../../lib/helpers/getAllTransactions";

interface IProps {
  transactions: tranferShapes.TTxn[];
  p2pTransactions: tranferShapes.TP2pTxns[];
}

const Transactions: React.FC<IProps> = ({ transactions, p2pTransactions }) => {
  const { loading } = useSidebarLoadingStore();

  const allTransactions = useMemo(() => {
    return getAllTransactions(p2pTransactions, transactions);
  }, [transactions, p2pTransactions]);

  return loading ? (
    <PrimaryLoader />
  ) : (
    <TransactionsPage allTransactions={allTransactions} />
  );
};

export default Transactions;
