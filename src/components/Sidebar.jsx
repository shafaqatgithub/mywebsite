

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSidebarStatus, setSidebarOff } from '../store/Sidebarslice';
import { IoCloseSharp } from "react-icons/io5";
import { selectTheme } from '../store/ThemeSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const currentTheme = useSelector(selectTheme);

  const closeSidebar = () => {
    dispatch(setSidebarOff());
  };

  return (
    <aside
      className={`fixed top-0 left-0 w-40 h-full shadow-lg p-8 transition-transform duration-300
        ${isSidebarOn ? 'translate-x-0' : '-translate-x-full'} z-50 
        ${currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <button onClick={closeSidebar} className="mb-4 absolute left-28 top-6">
        <IoCloseSharp />
      </button>
      <div>
        <ul className='flex flex-col gap-4 cursor-pointer items-center mt-8'>
      
           <li className='hover:text-orange-600' onClick={closeSidebar}><a href='#home'>Home </a></li>
            <li className='hover:text-orange-600' onClick={closeSidebar}><a href='#about'>About </a></li>
            <li className='hover:text-orange-600' onClick={closeSidebar}><a href='#projects'>Projects </a></li>
          <li className='hover:text-orange-600' onClick={closeSidebar}><a href='#contact'>Contact </a></li>
        
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

