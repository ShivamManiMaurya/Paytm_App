import React from "react";

const TransferPageSkeleton = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full bg-gray-100 p-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-24 mb-6"></div>

      <div className="flex gap-6">
        {/* Left: Add Money Form Skeleton */}
        <div className="w-1/2">
          <div className="w-full bg-white rounded-xl shadow p-6 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-24"></div>

            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="w-full border rounded h-10 bg-gray-100"></div>
            </div>

            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-12"></div>
              <div className="w-full border rounded h-10 bg-gray-100"></div>
            </div>

            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Right: Balance + Transactions Skeleton */}
        <div className="w-1/2 space-y-4">
          {/* Balance Summary Skeleton */}
          <div className="w-full bg-white rounded-xl shadow p-6 space-y-2">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-32"></div>
              <div className="h-4 bg-gray-200 rounded w-12"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
          </div>

          {/* Recent Transactions Skeleton */}
          <div className="w-full bg-white rounded-xl shadow p-6 space-y-2">
            <div className="h-6 bg-gray-200 rounded w-32"></div>
            <div className="flex justify-between">
              <div className="space-y-1">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferPageSkeleton;
