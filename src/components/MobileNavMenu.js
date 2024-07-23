import logo from '../assests/whiteLogo.png'
import { Link } from 'react-router-dom';


import React, { useState } from 'react';

const MobileNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <div className='md:hidden flex justify-between w-[415px] mx-auto h-28 bg-prime2  '>
     <div className=" mb-1 mx-2 py-4 md:hidden">
          <img src={logo} alt="logo" className=" rounded-sm h-[55px] w-[155px] my-3"/>
         </div> 
    <div className="relative h-20 w-[250px] mt-2 py-3 ml-2 items-center flex overflow-hidden md:hidden"> 
      <button
        className="text-3xl absolute right-2 z-20 bg-transparent border-none"
        onClick={toggleSidebar}
      >
        ☰
      </button></div>
      <div>
         </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-prime1 text-white transform ${
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
              <Link to="/" className="block px-6 py-2 hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block px-6 py-2 hover:bg-gray-700">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block px-6 py-2 hover:bg-gray-700">
                Contact
              </Link>
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