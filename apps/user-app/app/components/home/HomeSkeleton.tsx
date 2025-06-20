import React from "react";

const HomeSkeleton = () => {
  return (
    <main className="h-[calc(100vh-7.7vh)] w-[100%] bg-gray-100 p-4 sm:p-6 md:p-8 animate-pulse">
      <div className="space-y-8">
        {/* Balance Card Skeleton */}
        <section className="w-full bg-white rounded-2xl shadow-md px-6 py-8 text-center">
          <div className="h-4 md:h-5 bg-gray-200 rounded w-28 mx-auto mb-2"></div>
          <div className="h-9 md:h-10 bg-gray-200 rounded w-40 mx-auto"></div>
        </section>

        {/* Action Buttons Skeleton */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="bg-gray-200 rounded-xl h-16 shadow"></div>
          <div className="bg-gray-200 rounded-xl h-16 shadow"></div>
          <div className="bg-gray-200 rounded-xl h-16 shadow"></div>
        </section>

        {/* Recent Transactions Skeleton */}
        <section className="w-full bg-white rounded-2xl shadow-md px-6 py-8">
          <div className="h-5 md:h-6 bg-gray-200 rounded w-36 mb-6"></div>
          <ul className="space-y-4">
            {/* Transaction Item 1 */}
            <li className="flex justify-between items-center border-b pb-3">
              <div className="space-y-2">
                <div className="h-4 md:h-5 bg-gray-200 rounded w-24"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="h-4 md:h-5 bg-gray-200 rounded w-16"></div>
            </li>

            {/* Transaction Item 2 */}
            <li className="flex justify-between items-center border-b pb-3">
              <div className="space-y-2">
                <div className="h-4 md:h-5 bg-gray-200 rounded w-32"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="h-4 md:h-5 bg-gray-200 rounded w-20"></div>
            </li>

            {/* Transaction Item 3 */}
            <li className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="h-4 md:h-5 bg-gray-200 rounded w-28"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="h-4 md:h-5 bg-gray-200 rounded w-20"></div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default HomeSkeleton;
