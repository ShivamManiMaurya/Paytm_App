"use client";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  const router = useRouter();

  return (
    <header className="w-full px-6 py-3 border-b bg-white shadow-sm flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600 select-none">PayTM</div>

      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 text-sm">
            Hi, {user.name ?? "User"}
          </span>
          <Button variant="text" onClick={onSignout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <Button
            variant="outlined"
            onClick={() => {
              router.push("/auth/signup");
            }}>
            Signup
          </Button>
          <Button variant="contained" onClick={onSignin}>
            Login
          </Button>
        </div>
      )}
    </header>
  );
};
