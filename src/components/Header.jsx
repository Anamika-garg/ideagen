import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        className="w-1/2 p-2 border rounded"
      />
      <a href="/login">
      <button className="bg-[var(--primary-color)] text-white py-2 px-4 rounded">Login</button>
      </a>
    </header>
  );
};

export default Header;
