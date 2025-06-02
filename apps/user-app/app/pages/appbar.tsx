"use client";

import React from "react";
import { Appbar } from "../components/appbar";
import { signOut, signIn, useSession } from "next-auth/react";

const AppbarWrapper = () => {
  const session = useSession();

  return (
    <Appbar user={session?.data?.user} onSignin={signIn} onSignout={signOut} />
  );
};

export default AppbarWrapper;
