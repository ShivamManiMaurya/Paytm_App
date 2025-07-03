"use client";

import React, { useState } from "react";
import { signOut, signIn, useSession } from "next-auth/react";
import MainLoader from "../components/common/MainLoader";

export default function LandingPage() {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    // Simulate route change delay (you can replace this with a router push if using Next.js router)
    window.location.href = "/pages/home";
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 text-center"
      style={{ height: "calc(100vh - 62px)" }}>
      <h1 className="text-5xl font-bold mb-6">Welcome to PaytmClone</h1>
      <p className="text-xl max-w-xl">
        Fast, secure, and easy payments. Manage your money anytime, anywhere.
      </p>

      {session?.data?.user && (
        <button
          onClick={handleStart}
          disabled={isLoading}
          className={`cursor-pointer mt-8 px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out transform ${
            isLoading
              ? "bg-blue-300 text-white cursor-not-allowed"
              : "bg-white text-blue-600 hover:bg-blue-100 hover:shadow-xl active:scale-95"
          }`}>
          {isLoading ? <MainLoader /> : "Get Started"}
        </button>
      )}
    </div>
  );
}
