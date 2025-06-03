"use client";

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useState } from "react";
import { useWalletStore } from "@repo/store";
import LandingPage from "./pages/landingPage";

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
      <LandingPage />
    </>
  );
}
