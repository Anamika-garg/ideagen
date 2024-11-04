import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-end gap-[10px] items-center">
      <input
        type="text"
        placeholder="Search"
        className="w-1/2 p-2 border rounded-md"
      />
      <a href="/login">
      <button className="bg-[var(--primary-color)] text-white py-2 px-4 rounded border-2 btn-hover">Login</button>
      </a>
    </header>
  );
};

export default Header;
