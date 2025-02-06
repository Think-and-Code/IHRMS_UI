import React from "react";
import SidebarItem from "./SidebarItem";
import DropdownMenu from "./DropdownMenu";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <div
      role="toggle"
      className={`absolute top-[76px] left-0 w-full h-1000 md:w-[280px] bg-gray-900 text-white shadow-lg transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <SidebarItem icon="bi bi-house-door-fill" label="Home" />
      <SidebarItem icon="bi bi-bookmark-fill" label="Attendance" />
      <SidebarItem icon="bi bi-people-fill" label="Team" />
      <SidebarItem icon="bi bi-calendar-event" label="Schedule" />
      <SidebarItem icon="bi bi-gear-fill" label="Settings" />

      <div className="my-4 bg-gray-600 h-[1px]"></div>

      <DropdownMenu />

      <SidebarItem icon="bi bi-box-arrow-in-right" label="Logout" />
    </div>
  );
};

export default Sidebar;
