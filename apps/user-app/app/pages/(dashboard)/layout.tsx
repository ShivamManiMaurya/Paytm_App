import React from "react";
import Sidebar from "../../components/sidebar/Index";

interface IProps {
  children: React.ReactNode;
}

const dashboard: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" flex ">
      <Sidebar />
      {children}
    </div>
  );
};

export default dashboard;
