import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { GoMoon } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { setDarkTheme,setLightTheme, selectTheme } from '../store/ThemeSlice';
import { setSidebarOn } from '../store/Sidebarslice';



// const Navbar = () => {
//     const dispatch = useDispatch();
//     const currentTheme = useSelector(selectTheme);
  
//     const toggleSidebar = () => {
//       dispatch(setSidebarOn());
//     };
  
//     const toggleTheme = () => {
//       if (currentTheme === 'light') {
//         dispatch(setDarkTheme());
//       } else {
//         dispatch(setLightTheme());
//       }
//     };
  
//     return (
//       <header>
//         <nav className={`w-full h-auto p-4 flex items-center justify-between ${currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-slate-950 text-black'}`}>
//           <div className='font-bold text-2xl text-pink-700'>SM</div>
          
//           <div className='hidden md:flex'>
//             <ul className='flex flex-row gap-4 cursor-pointer'>
//               <li>Home</li>
//               <li>About</li>
//               <li>Portfolio</li>
//               <li>Contact</li>
//             </ul>
//           </div>
  
//           <div className='hidden md:block'>
//             <button onClick={toggleTheme} aria-label="Toggle theme">
//               {currentTheme === 'light' ?   <GoMoon size={20} /> : <FiSun size={20} />}
//             </button>
//           </div>
  
//           <div className='md:hidden'>
//             <button type='button' onClick={toggleSidebar}>
//               <LuMenu size={24} />
//             </button>
//           </div>
//         </nav>
//       </header>
//     );
//   }

const Navbar = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  const toggleSidebar = () => {
    dispatch(setSidebarOn());
  };

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  };

  return (
    <header className=''>
      <nav className={`fixed top-0 w-full z-10 px-14 py-4 flex items-center justify-between  ${currentTheme === 'dark' ? 'bg-black text-white ' : 'bg-white text-black'}`}>
        <div className='font-bold text-2xl'>SM</div>
        
        <div className='hidden md:flex'>
          <ul className='flex flex-row gap-4 cursor-pointer'>
          <li className='hover:text-orange-600'><a href='#home'>Home</a></li>
            <li className='hover:text-orange-600'><a href='#about'>About</a></li>
            <li className='hover:text-orange-600'><a href='#projects'>Projects</a></li>
            <li className='hover:text-orange-600'><a href='#contact'>Contact</a></li>
          </ul>
        </div>

        <div className='hidden md:block'>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {currentTheme === 'light' ? <GoMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        <div className='md:hidden flex items-center'>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {currentTheme === 'light' ? <GoMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button type='button' onClick={toggleSidebar} className="ml-2">
            <LuMenu size={24} />
          </button>
        </div>
      </nav>
      <div className='h-1 w-[90%] border-b border-orange-500 mx-auto mt-16 
      '></div>
    </header>
  );
}

export default Navbar;
