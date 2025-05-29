"use client";

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useState } from "react";
import { useWalletStore } from "@repo/store";

export default function Home() {
  const [message, setMessage] = useState("");
  const balance = useWalletStore((s) => s.balance);
  const updateBalance = useWalletStore((s) => s.updateBalance);

  const callApi = async () => {
    const res = await fetch("/api/users"); // API route
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500 ">
        Hello world!
      </h1>
      <button onClick={callApi}>Call API</button>
      {message && <p>{message}</p>}
      <div>
        <h2>Balance: ₹{balance}</h2>
        <button onClick={() => updateBalance(balance + 100)}>Add ₹100</button>
      </div>
    </>
  );
}
