import React, { useState } from "react";

function CollapsibleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute z-10 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 bottom-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 absolute bottom-0 left-0"
      >
        Menu
      </button>
    </div>
  );
}

export default CollapsibleMenu;
