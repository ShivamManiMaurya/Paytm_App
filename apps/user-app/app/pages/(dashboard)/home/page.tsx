import React from "react";
import Home from "../../../components/home/Index";
import {
  getBalance,
  getOnRampTransactions,
  getP2PTransactions,
} from "../../../lib/data/transferData";

const homePage = async () => {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();
  const p2pTransactions = await getP2PTransactions();

  return (
    <Home
      balance={balance}
      transactions={transactions}
      p2pTransactions={p2pTransactions.data}
    />
  );
};

export default homePage;
