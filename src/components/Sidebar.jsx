import React from "react";
import { HomeIcon, ShoppingCartIcon, CubeIcon, CogIcon, ChartBarIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-64 p-4 space-y-6">
      <h2 className="text-2xl font-bold">Logo</h2>
      <nav className="space-y-4">
        <a href="/" className="flex items-center space-x-2 text-gray-700">
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </a>
        {/* <a href="#" className="flex items-center space-x-2 text-gray-700">
          <ShoppingCartIcon className="h-5 w-5" />
          <span>Orders</span>
        </a> */}
        <a href="/product" className="flex items-center space-x-2 text-gray-700">
          <CubeIcon className="h-5 w-5" />
          <span>Products</span>
        </a>
        <a href="/theme" className="flex items-center space-x-2 text-gray-700">
          <CogIcon className="h-5 w-5" />
          <span>Choose Themes</span>
        </a>
        <a href="/analytics" className="flex items-center space-x-2 text-gray-700">
          <ChartBarIcon className="h-5 w-5" />
          <span>Analytics</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
