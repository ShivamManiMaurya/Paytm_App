"use client";
import { usePathname, useRouter } from "next/navigation";
import { sidebarItems } from "./fieldsAndTypes";
import { useSidebarLoadingStore } from "@repo/store";
import NProgress from "nprogress";
import "../../lib/styles/nprogress.css";
import { useEffect } from "react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const { isLoading, setLoading } = useSidebarLoadingStore((state) => ({
    isLoading: state.loading,
    setLoading: state.setLoading,
  }));

  const handlePrefetch = (path: string) => {
    router.prefetch(path);
  };

  const handleNavigate = (path: string) => {
    NProgress.start();
    setLoading(true, path);
    router.push(path);
  };

  useEffect(() => {
    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isLoading]);

  return (
    <aside>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse z-50" />
      )}
      <nav className="lg:w-[100%] h-[calc(100vh-7.7vh)] px-6 border-r border-gray-200 bg-white shadow-md flex flex-col items-center py-6 space-y-4">
        <ul>
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const path = `/pages/${item.route}`;
            return (
              <li key={item.route}>
                <button
                  className={` ${item.route === lastSegment ? "bg-gray-200" : ""} 
                      w-[100%] flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors 
                      text-gray-700 cursor-pointer sidebar-link gap-2 my-2 break-normal whitespace-nowrap`}
                  type="button"
                  disabled={item.route === lastSegment}
                  onClick={() => handleNavigate(path)}
                  onMouseEnter={() => handlePrefetch(path)}>
                  <item.icon />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
