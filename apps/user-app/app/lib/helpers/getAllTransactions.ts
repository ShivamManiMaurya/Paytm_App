import React from "react";
import { tranferShapes } from "../types/transferShapes";
import moment from "moment";

const getAllTransactions = (
  p2pTransactions: tranferShapes.TP2pTxns[],
  transactions: tranferShapes.TTxn[]
) => {
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
};

export default getAllTransactions;
