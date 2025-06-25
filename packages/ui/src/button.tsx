"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disable?: boolean;
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary";
  styles?: string;
}

export const Button = ({
  onClick,
  children,
  disable = false,
  variant = "text",
  color = "primary",
  styles,
}: ButtonProps) => {
  const baseStyles =
    "font-medium rounded-lg text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition duration-200 ease-in-out";

  const variantClasses = {
    text: {
      primary: "text-blue-600 hover:bg-blue-100",
      secondary: "text-gray-600 hover:bg-gray-100",
    },
    contained: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
    },
    outlined: {
      primary: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      secondary: "border border-gray-600 text-gray-600 hover:bg-gray-50",
    },
  };

  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disable}
      style={{ cursor: "pointer" }} // ensure pointer cursor
      className={clsx(
        baseStyles,
        variantClasses[variant][color],
        "hover:opacity-90", // opacity down on hover
        "active:opacity-75", // more opacity on click hold
        "active:scale-95", // scale down on click hold
        "hover:shadow-md", // subtle shadow on hover
        styles
      )}>
      {children}
    </button>
  );
};
