import React from 'react';
import "./Rccg_logo.png" 
import CollapsibleMenu from './menu';

function SideNav() {
  return (
    
    <div  className="py-20 bg-white h-screen w-56 text-black flex flex-col  border-r">
      <div className="text-lg font-semibold py-4 px-6 text-orange-600 hover:text-orange-600">
        DASHBOARD
      </div>
      <ul className="flex-grow">
        <li className="px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          item1
        </li>
        <li className="px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          item2
        </li>
        <li className="px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          item3
        </li>
        <li className=" px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          OTHERS1
        </li>
        <li className="px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          item4
        </li>
        <li className="px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          item5
        </li>
        <li className=" px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          OTHERS2
        </li>
        <li className="px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          item6
        </li>
        <li className="px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          item7
        </li>
        <li className="px-6 py-3 text-sm hover:text-orange-600 cursor-pointer">
          item8
        </li>
      </ul>
      <div className='flex'>
      <img src="./Rccg_logo.png" alt="img" /><span className='text-sm'>Blessing Daniels</span>
      <CollapsibleMenu/>
      </div>
    </div>
  );
}

export default SideNav;
