"use client";
import React from "react";

const EyeIconClose = () => {
  return (
    <svg
      className="w-12 h-12 bg-green-300" // Add background for visibility
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-300">
      <EyeIconClose />
    </main>
  );
}
