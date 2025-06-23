"use client";

import React from "react";
import Home from "../../../components/home/Home";
import { useSidebarLoadingStore } from "@repo/store";
import HomeSkeleton from "../../../components/home/HomeSkeleton";
import Loader from "../../../components/common/PrimaryLoader";

const homePage = () => {
  const { loading } = useSidebarLoadingStore();

  return loading ? <Loader /> : <Home />;
};

export default homePage;
