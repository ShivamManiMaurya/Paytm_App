"use client";
import { Button } from "@repo/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";
import { toMaybe } from "../lib/helpers/Maybe";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isSignUp = useMemo(() => {
    return pathname.includes("/auth/signup");
  }, [pathname]);

  const isSignIn = useMemo(() => {
    return pathname.includes("/auth/signin");
  }, [pathname]);

  const capitalizeName = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <header className="w-full px-6 py-3 border-b bg-white shadow-sm flex justify-between items-center">
      <div
        className="text-2xl font-extrabold text-blue-600 select-none cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-blue-700 active:scale-95 tracking-wide"
        onClick={() => router.push("/")}>
        <span className="text-[#003DA5]">Pay</span>
        <span className="text-[#00B9F1]">TM</span>
      </div>

      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-[15px] text-gray-800 font-normal">
            Hi,{" "}
            <span className="font-medium text-gray-950">
              {capitalizeName(toMaybe(user).get("name").unwrap()) || "User"}
            </span>
          </span>

          <Button variant="text" onClick={onSignout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          {!isSignUp && (
            <Button
              variant="outlined"
              onClick={() => {
                router.push("/auth/signup");
              }}>
              Signup
            </Button>
          )}
          {!isSignIn && (
            <Button variant="contained" onClick={onSignin}>
              Login
            </Button>
          )}
        </div>
      )}
    </header>
  );
};
