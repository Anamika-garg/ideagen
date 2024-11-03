import React from "react";

const ProductSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Products</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          {/* Add your products section */}
          <div className="text-center border-b pb-6">
            <h2 className="text-xl font-semibold mb-2">Add your products</h2>
            <p className="text-gray-600 mb-4">
              Start by stocking your store with products your customers will love
            </p>
            <div className="flex justify-center space-x-4">
              {/* Add Product Button */}
              <button className="flex items-center space-x-1 px-4 py-2 bg-black text-white rounded-lg">
                <span className="text-lg">➕</span> {/* Plus icon as emoji */}
                <span>Add product</span>
              </button>
              
              {/* Import Button */}
              <button className="flex items-center space-x-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg">
                <span className="text-lg">⬇️</span> {/* Down arrow as emoji */}
                <span>Import</span>
              </button>
            </div>
          </div>

          {/* Find products to sell section */}
          <div className="text-center">
            <h2 className="text-lg font-medium">Find products to sell</h2>
            <p className="text-gray-600 mb-4">
              Have dropshipping or print on demand products shipped directly from the supplier to your customer, and only pay for what you sell.
            </p>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg">
              Browse product sourcing apps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
