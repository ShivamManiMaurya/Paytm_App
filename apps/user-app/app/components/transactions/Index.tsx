"use client";

import React, { useMemo } from "react";
import TransactionsPage from "./Transactions";
import { useSidebarLoadingStore } from "@repo/store";
import PrimaryLoader from "../common/PrimaryLoader";
import { tranferShapes } from "../../lib/types/transferShapes";
import moment from "moment";

interface IProps {
  transactions: tranferShapes.TTxn[];
  p2pTransactions: tranferShapes.TP2pTxns[];
}

const Transactions: React.FC<IProps> = ({ transactions, p2pTransactions }) => {
  const { loading } = useSidebarLoadingStore();

  const allTransactions = useMemo(() => {
    const normalizedFirst: tranferShapes.TCombinedTP2P[] = p2pTransactions.map(
      (item) => ({
        ...item,
        date: moment(item.timeStamp),
        source: "P2P",
      })
    );

    const normalizedSecond: tranferShapes.TCombinedTxn[] = transactions.map(
      (item) => ({
        ...item,
        date: moment(item.startTime),
        source: "Bank",
      })
    );
    const combined = [...normalizedFirst, ...normalizedSecond];
    return combined.sort((a, b) =>
      b.date.diff(a.date)
    ) as tranferShapes.allTransactions;
  }, [transactions, p2pTransactions]);

  return loading ? (
    <PrimaryLoader />
  ) : (
    <TransactionsPage allTransactions={allTransactions} />
  );
};

export default Transactions;
