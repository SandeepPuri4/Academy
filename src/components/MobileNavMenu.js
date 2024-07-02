import logo from '../assests/futuredevLogo.png.jpg'


import React, { useState } from 'react';

const MobileNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <div className='flex justify-between  mt-2 md:hiden'>
     <div className=" mb-1 mx-2 py-3 md:hidden">
          <img src={logo} alt="logo" className=" rounded-sm h-[70px] w-[200px]"/>
         </div> 
    <div className="relative h-20 w-[155px] mt-2 py-2 ml-2 flex overflow-hidden md:hidden"> 
      <button
        className="text-3xl absolute right-4 z-20 bg-transparent border-none"
        onClick={toggleSidebar}
      >
        ☰
      </button></div>
      <div>
         </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-10`}
      >
        <button
          className="text-3xl absolute top-4 right-4 bg-transparent border-none text-white"
          onClick={toggleSidebar}
        >
          &times;
        </button>
        <nav className="mt-16">
          <ul className="space-y-4">
            <li>
              <a href="#home" className="block px-6 py-2 hover:bg-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="block px-6 py-2 hover:bg-gray-700">
                Courses
              </a>
            </li>
            <li>
              <a href="#about" className="block px-6 py-2 hover:bg-gray-700">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-6 py-2 hover:bg-gray-700">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 ${
          sidebarOpen ? 'block' : 'hidden'
        } transition-opacity duration-300 z-5`}
        onClick={toggleSidebar}
      ></div>

    </div>
    </>
  );
};

export default MobileNav;
