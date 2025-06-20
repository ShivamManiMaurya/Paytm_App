"use client";

import React from "react";
import Home from "../../../components/home/Home";
import { useSidebarLoadingStore } from "@repo/store";
import HomeSkeleton from "../../../components/home/HomeSkeleton";

const homePage = () => {
  const isLoading = useSidebarLoadingStore((state) => state.loading);

  return isLoading ? <HomeSkeleton /> : <Home />;
};

export default homePage;
