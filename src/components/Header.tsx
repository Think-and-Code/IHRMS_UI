import React, { useState } from "react";
import {Search, UserCircle } from "lucide-react";
import Logo from "../assets/logo.png";


const Header: React.FC= () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md relative">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="h-8" />
      </div>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-10 bg-gray-800 text-gray-200 rounded-md outline-none focus:ring-2 focus:ring-violet-500"
        />
        <Search size={20} className="absolute left-3 top-2 text-gray-400" />
      </div>

      <div className="relative">
        <button
          className="p-2 rounded-full hover:bg-gray-700"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          role="Logout"
        >
          <UserCircle size={28} />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg border border-gray-200">
            <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
