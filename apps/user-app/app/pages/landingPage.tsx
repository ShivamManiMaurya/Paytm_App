import React from "react";

export default function LandingPage() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 text-center"
      style={{ height: "calc(100vh - 62px)" }}>
      <h1 className="text-5xl font-bold mb-6">Welcome to PaytmClone</h1>
      <p className="text-xl max-w-xl">
        Fast, secure, and easy payments. Manage your money anytime, anywhere.
      </p>
    </div>
  );
}
