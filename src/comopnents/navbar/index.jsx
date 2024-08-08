import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950 text-white flex items-center justify-between px-4 py-2">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-red-500 font-bold text-lg">Interneex</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-red-500 text-white px-3 py-1 rounded">Courses</button>
        <a href="#" className="hover:text-gray-300">Practice</a>
        <a href="#" className="text-green-500 hover:text-green-300">Jobs</a>
        <a href="#" className="text-blue-500 hover:text-blue-300">Events</a>
        <a href="#" className="hover:text-gray-300">Placements</a>
        <a href="#" className="hover:text-gray-300">Hire From Us</a>
        <a href="#" className="text-yellow-500 hover:text-yellow-300">Refer & Earn</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:hidden items-start space-y-1 py-2 absolute top-16 left-0 w-full bg-black px-4`}>
        <button className="bg-red-500 text-white px-3 py-1 rounded w-full text-left">Courses</button>
        {/* Other links here following the same pattern */}
      </div>

      {/* Sign-In Button */}
      <button className="bg-green-500 text-black px-3 py-1 rounded hidden md:block">SIGN IN</button>
    </nav>
  );
};

export default Navbar;
