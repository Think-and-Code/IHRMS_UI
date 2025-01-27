import React from "react";

interface SidebarItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, onClick }) => {
  return (
    <div
      className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-violet-600 text-white"
      onClick={onClick}
    >
      <i className={icon}></i>
      <span className="text-[15px] ml-4 text-gray-200 font-bold">{label}</span>
    </div>
  );
};

export default SidebarItem;
