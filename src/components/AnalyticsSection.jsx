import React from "react";

const AnalyticsSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Analytics</h1>
        
        {/* Top Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
            📅 Today
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
            Compare to: Yesterday
          </button>
          <div className="flex-1 text-right space-x-4">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg">Customize</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg">Auto-refresh</button>
          </div>
        </div>

        {/* Analytics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Total Sales */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-300">Total sales</h2>
            <p className="text-3xl font-medium">₹0.00</p>
            <div className="mt-2 text-gray-500">No data available for this date range</div>
          </div>

          {/* Sales by Channel */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-300">Sales by channel</h2>
            <p className="text-gray-500">There was no data found for this date range.</p>
          </div>

          {/* Online Store Sessions */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-300">Online store sessions</h2>
            <p className="text-3xl font-medium">0</p>
            <div className="mt-2 text-gray-500">No data available for this date range</div>
          </div>

          {/* Conversion Rate */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-300">Online store conversion rate</h2>
            <p className="text-3xl font-medium">0%</p>
            <div className="mt-2 text-gray-500">Added to cart: 0 sessions</div>
            <div className="mt-1 text-gray-500">Reached checkout: 0 sessions</div>
          </div>

          {/* Total Orders */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-300">Total orders</h2>
            <p className="text-3xl font-medium">0</p>
            <div className="mt-2 text-gray-500">No data available for this date range</div>
          </div>

          {/* Average Order Value */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-300">Average order value</h2>
            <p className="text-3xl font-medium">₹0.00</p>
            <div className="mt-2 text-gray-500">No data available for this date range</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
