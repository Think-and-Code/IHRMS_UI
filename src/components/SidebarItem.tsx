import React from "react";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
  icon: string;
  label: string;
  isSidebarOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isSidebarOpen }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (label) {
      const path = `/${label.toLowerCase()}`;
      navigate(path);
    }
  };

  return (
    <div
      className="p-2.5 mt-3 flex items-center rounded-md p-5 duration-300 cursor-pointer hover:bg-violet-600 text-white"
      onClick={handleClick}
      role="button"
    >
      <i className={icon}></i>
      {isSidebarOpen && (
        <span className="text-[15px] ml-4 text-gray-200 font-bold" >{label}</span>
      )}
    </div>
  );
};

export default SidebarItem;
