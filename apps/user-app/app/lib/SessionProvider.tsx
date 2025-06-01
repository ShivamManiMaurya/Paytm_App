"use client";

import { SessionProvider } from "next-auth/react";

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default Provider;
