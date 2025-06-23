"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useSidebarLoadingStore } from "@repo/store";

export function RouteChangeLoader() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);
  const { setLoading } = useSidebarLoadingStore();

  useEffect(() => {
    if (prevPathname.current !== null && prevPathname.current !== pathname) {
      setLoading(false);
    }

    prevPathname.current = pathname;
  }, [pathname, setLoading]);

  return null;
}
