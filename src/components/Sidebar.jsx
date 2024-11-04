import React from "react";
import { HomeIcon, ShoppingCartIcon, CubeIcon, CogIcon, ChartBarIcon, AdjustmentsIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-64 p-4 space-y-6">
      <h2 className="text-2xl font-bold">Biz Boost</h2>
      <nav className="space-y-4">
        <Link to={"/"} className="flex p-2 items-center space-x-2 text-gray-700 sideBar-hover">
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </Link>

        
        
        <Link to={"/product"} className="flex p-2 items-center space-x-2 text-gray-700 sideBar-hover">
          <CubeIcon className="h-5 w-5" />
          <span>Products</span>
        </Link>
        <Link to={"/theme"} className="flex p-2 items-center space-x-2 text-gray-700 sideBar-hover">
          <CogIcon className="h-5 w-5" />
          <span>Choose Themes</span>
        </Link>
        <Link to={"/analytics"} className="flex p-2 items-center space-x-2 text-gray-700 sideBar-hover">
          <ChartBarIcon className="h-5 w-5" />
          <span>Analytics</span>
        </Link>


        <Link to={"/"} className="flex p-2 items-center space-x-2 text-gray-700 sideBar-hover">
          <CogIcon className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
