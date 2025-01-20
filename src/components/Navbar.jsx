import React, { useState } from 'react';
import logo from "../assets/logo (2).png";
import downarow from "../assets/downarrow.png";
import LoginButton from './recomponents/LoginButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className='container pt-6 mx-auto -mb-[6px] md:px-8'>
      <div className='flex items-center justify-between gap-x-6'>
        {/* Logo */}
        <div>
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className='hidden md:flex'>
          <ul className='flex items-center gap-x-4 text-[8px] font-Inter'>
            <li className='flex gap-x-1'>Resources <img className='w-2 h-2 mt-1' src={downarow} alt="down" /></li>
            <li>Success stories</li>
            <li className='flex gap-x-1'>Company <img className='w-2 h-2 mt-1' src={downarow} alt="down" /></li>
            <li>Pricing</li>
            <li><LoginButton /></li>
            <li><button className='h-6 px-4 py-2 bg-[#FF6D2C] border border-b-4 border-r-2 border-black rounded-lg font-Inter text-[9px] flex items-center justify-center'>Create free account</button></li>
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='flex items-center md:hidden'>
          <button
            className='text-black focus:outline-none'
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggle visibility based on isMenuOpen state) */}
      {isMenuOpen && (
        <div className='p-4 space-y-2 text-black md:hidden'>
          <a href="#" className='block'>Resources</a>
          <a href="#" className='block'>Success stories</a>
          <a href="#" className='block'>Company</a>
          <a href="#" className='block'>Pricing</a>
          <LoginButton />
          <button className=' px-4 py-[1px] border bg-[#FF6D2C] border-b-4 border-r-2 border-black rounded-lg font-Inter text-[9px] flex items-center justify-center'>
            Create free account
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
