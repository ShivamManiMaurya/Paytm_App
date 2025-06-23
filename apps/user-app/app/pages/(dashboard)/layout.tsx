import React from "react";
import Sidebar from "../../components/sidebar/Index";
import { RouteChangeLoader } from "../../lib/RouteChangeLoader";

interface IProps {
  children: React.ReactNode;
}

const dashboard: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" flex ">
      <Sidebar />
      <RouteChangeLoader />
      {children}
    </div>
  );
};

export default dashboard;
