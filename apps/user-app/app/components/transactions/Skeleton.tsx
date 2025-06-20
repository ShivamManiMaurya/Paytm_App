import React from "react";

const TransactionsPageSkeleton = () => {
  return (
    <main className="w-[100%] bg-gray-100 p-4 sm:p-6 md:p-8 animate-pulse">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Page Title Skeleton */}
        <div>
          <div className="h-8 md:h-9 bg-gray-200 rounded w-56 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>

        {/* Transaction List Skeleton */}
        <section className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-2">
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                </th>
                <th className="py-2">
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                </th>
                <th className="py-2">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </th>
                <th className="py-2">
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Transaction Row 1 */}
              <tr className="border-b">
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
              </tr>

              {/* Transaction Row 2 */}
              <tr className="border-b">
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-14"></div>
                </td>
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
              </tr>

              {/* Transaction Row 3 */}
              <tr className="border-b">
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-28"></div>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-8"></div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-18"></div>
                </td>
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
              </tr>

              {/* Transaction Row 4 */}
              <tr className="last:border-b-0">
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-26"></div>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-14"></div>
                </td>
                <td className="py-3">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default TransactionsPageSkeleton;
