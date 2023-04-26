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
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            ><svg height='10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.6 11.6c.4-.8.4-1.8 0-2.6l2.1-1.6c.4-.3.5-.9.2-1.3l-2-3.5c-.3-.5-.9-.7-1.4-.5l-2.5 1c-.8-.6-1.7-1-2.6-1s-1.8.4-2.6 1l-2.5-1c-.5-.2-1.1 0-1.4.5l-2 3.5c-.3.4-.2.9.2 1.3l2.1 1.6c-.4.8-.4 1.8 0 2.6l-2.1 1.6c-.4.3-.5.9-.2 1.3l2 3.5c.3.5.9.7 1.4.5l2.5-1c.8.6 1.7 1 2.6 1s1.8-.4 2.6-1l2.5 1c.5.2 1.1 0 1.4-.5l2-3.5c.3-.4.2-.9-.2-1.3l-2.1-1.6zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
          </svg>
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            >
              Integrations
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            >
              Refer and Earn
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            >
              Switch account
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            ><svg height='12' className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
            <path d="M9 18h-6v-12h6"></path>
            <path d="M21 12L15 6M21 12L15 18"></path>
          </svg>
              Log out
            </a>
          </div>
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="text-gray-800 font-bold hover:text-gray-700 focus:outline-none focus:text-gray-700 absolute bottom-0 left-0"
      >
      <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.37496 1.83341C1.15274 1.83341 0.958293 1.75341 0.791626 1.59341C0.624959 1.43397 0.541626 1.23619 0.541626 1.00008C0.541626 0.76397 0.624959 0.565914 0.791626 0.405914C0.958293 0.24647 1.15274 0.166748 1.37496 0.166748C1.61107 0.166748 1.80885 0.24647 1.96829 0.405914C2.12829 0.565914 2.20829 0.76397 2.20829 1.00008C2.20829 1.23619 2.12829 1.43397 1.96829 1.59341C1.80885 1.75341 1.61107 1.83341 1.37496 1.83341ZM5.99996 1.83341C5.76385 1.83341 5.56607 1.75341 5.40663 1.59341C5.24663 1.43397 5.16663 1.23619 5.16663 1.00008C5.16663 0.76397 5.24663 0.565914 5.40663 0.405914C5.56607 0.24647 5.76385 0.166748 5.99996 0.166748C6.23607 0.166748 6.43413 0.24647 6.59413 0.405914C6.75357 0.565914 6.83329 0.76397 6.83329 1.00008C6.83329 1.23619 6.75357 1.43397 6.59413 1.59341C6.43413 1.75341 6.23607 1.83341 5.99996 1.83341ZM10.625 1.83341C10.3888 1.83341 10.1908 1.75341 10.0308 1.59341C9.87135 1.43397 9.79163 1.23619 9.79163 1.00008C9.79163 0.76397 9.87135 0.565914 10.0308 0.405914C10.1908 0.24647 10.3888 0.166748 10.625 0.166748C10.8472 0.166748 11.0416 0.24647 11.2083 0.405914C11.375 0.565914 11.4583 0.76397 11.4583 1.00008C11.4583 1.23619 11.375 1.43397 11.2083 1.59341C11.0416 1.75341 10.8472 1.83341 10.625 1.83341Z" fill="#4D5760"/>
</svg>

      </button>
    </div>
  );
}

export default CollapsibleMenu;
