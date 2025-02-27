import React from "react";

const Navbar = () => {
  return (
    <nav className="flex  justify-between items-center p-6 bg-transperent shadow-md">
      <h1 className="text-2xl font-bold">
        <a href="/">CryptoPortfolio</a>
      </h1>
      <div>
        <button className="bg-blue-500 px-4 py-2 rounded transition duration-300 hover:bg-blue-600">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
