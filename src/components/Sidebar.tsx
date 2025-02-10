import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { Menu, X } from "lucide-react";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const [Open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!Open);

  return (
    <div
      role="toggle"
      className={`absolute top-[76px] left-0 h-screen bg-gray-900 text-white shadow-lg transform ${
        isSidebarOpen ? "w-[280px] translate-x-0" : "w-[60px] -translate-x-0"
      } transition-all duration-300 ease-in-out z-50`}
    >
      <button
        onClick={toggleSidebar}
        className="p-5 rounded-md bg-gray-700 hover:bg-gray-700 focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <SidebarItem
        icon="bi bi-house-door-fill"
        label="Home"
        isSidebarOpen={isSidebarOpen}
      />
      <SidebarItem
        icon="bi bi-bookmark-fill"
        label="Attendance"
        isSidebarOpen={isSidebarOpen}
      />
      <SidebarItem
        icon="bi bi-people-fill"
        label="Team"
        isSidebarOpen={isSidebarOpen}
      />
      <SidebarItem
        icon="bi bi-calendar-event"
        label="Schedule"
        isSidebarOpen={isSidebarOpen}
      />

      <div
        className="mt-3 flex items-center rounded-md p-5 duration-300 cursor-pointer hover:bg-violet-700 text-white"
        onClick={toggleMenu}
      >
        <i className="bi bi-chat-left-text-fill"></i>
        {isSidebarOpen && (
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Projects
            </span>
            <span className={`text-sm ${Open ? "rotate-180" : ""}`}>
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        )}
      </div>

      {Open && isSidebarOpen && (
        <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
          <h1 className="cursor-pointer p-2 hover:bg-violet-950 rounded-md mt-1">
            Updates
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-violet-950 rounded-md mt-1">
            User Details
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-violet-950 rounded-md mt-1">
            Progress
          </h1>
        </div>
      )}

      <SidebarItem
        icon="bi bi-gear-fill"
        label="Settings"
        isSidebarOpen={isSidebarOpen}
      />

      <div className="my-4 bg-gray-600 h-[1px]"></div>
    </div>
  );
};

export default Sidebar;
