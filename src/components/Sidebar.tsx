import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import DropdownMenu from "./DropdownMenu";
import Logo from "../assets/logo.png";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        className="absolute z-[9999] text-gray-300 text-4xl top-3 left-[20px] cursor-pointer bg-gray-700"
        onClick={toggleSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-800 rounded-md"></i>
      </button>

      {isSidebarOpen && (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center w-[200px] ml-17">
              <i><img src={Logo} alt="Logo" /></i>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
                onClick={toggleSidebar}
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
          <SidebarItem icon="bi bi-house-door-fill" label="Home" />
          <SidebarItem icon="bi bi-bookmark-fill" label="Attendance" />
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <DropdownMenu />
          <SidebarItem icon="bi bi-box-arrow-in-right" label="Logout" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
