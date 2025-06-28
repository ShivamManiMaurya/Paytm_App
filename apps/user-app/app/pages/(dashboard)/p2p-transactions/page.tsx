"use client";

import React from "react";
import Loader from "../../../components/common/PrimaryLoader";
import P2PTransfer from "../../../components/p2pTransafer/Index";
import { useSidebarLoadingStore } from "@repo/store";

const P2PTransferPage = () => {
  const { loading } = useSidebarLoadingStore();

  return loading ? <Loader /> : <P2PTransfer />;
};

export default P2PTransferPage;
