import React from "react";
import TransactionsPage from "../../../components/transactions/Index";
import {
  getOnRampTransactions,
  getP2PTransactions,
} from "../../../lib/data/transferData";

const Transactions = async () => {
  const transactions = await getOnRampTransactions();
  const p2pTransactions = await getP2PTransactions();

  return (
    <TransactionsPage
      transactions={transactions}
      p2pTransactions={p2pTransactions.data}
    />
  );
};

export default Transactions;
