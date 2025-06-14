"use client";

import React, { useEffect, useState } from "react";
import { ERoute, sidebarItems } from "./fieldsAndTypes";
import { useRouter, usePathname } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  const handleClick = (route: ERoute) => {
    router.push(route);
  };

  return (
    <div className="w-[12%] h-lvh border-r border-gray-200 bg-white shadow-md flex flex-col items-center py-6 space-y-4">
      {sidebarItems.map((item, index) => (
        <button
          key={item.label + index}
          onClick={() => handleClick(item.route)}
          className={` ${item.route === lastSegment ? "bg-gray-200" : ""} 
                      w-10/12 flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors 
                      text-gray-700 cursor-pointer`}>
          <span className="text-xl">
            <item.icon />
          </span>
          <span className="text-sm font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Index;
