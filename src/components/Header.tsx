import React from "react";
import { Menu, X, Search, UserCircle } from "lucide-react";
import Logo from "../assets/logo.png";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-700 focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-700">
          <UserCircle size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
