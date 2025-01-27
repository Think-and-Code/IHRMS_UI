import React, { useState } from "react";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-violet-700 text-white"
        onClick={toggleMenu}
      >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Projects</span>
          <span className={`text-sm ${isOpen ? "rotate-180" : ""}`}>
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
          <h1 className="cursor-pointer p-2 hover:bg-violet-950 rounded-md mt-1">Updates</h1>
          <h1 className="cursor-pointer p-2 hover:bg-violet-950 rounded-md mt-1">User Details</h1>
          <h1 className="cursor-pointer p-2 hover:bg-violet-950 rounded-md mt-1">Progress</h1>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
