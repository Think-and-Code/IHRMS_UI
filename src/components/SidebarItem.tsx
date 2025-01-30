import React from "react";

interface SidebarItemProps {
  icon: string;
  label: string;
  onClickItem?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, onClickItem }) => {
  return (
    <div
      className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-violet-600 text-white"
      onClick={onClickItem}
    >
      <i className={icon}></i>
      <span className="text-[15px] ml-4 text-gray-200 font-bold">{label}</span>
    </div>
  );
};

export default SidebarItem;
