"use client"

import React, { MouseEventHandler, useState } from 'react';

export function  Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  function closeMenu(){
    setIsMenuOpen(false)
  }

  return (
    <div className="sticky top-0 w-full max-w-[100vw] border-b border-zinc-800">
      {/* Mobile and Desktop Menu */}
      <nav className="py-4 mx-4 flex items-center justify-between">
        <a  href="#" className="text-white font-semibold text-lg">WEN BARBOSA</a>

        {/* Mobile Menu Button */}
        <button aria-label='menu button' className="mobile-menu-button md:hidden" onClick={toggleMenu}>
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex md:space-x-4 ${isMenuOpen ? '' : 'hidden'}`}>
          <li className='hover:text-blue-700'><a  href="#" className="text-white hover:text-blue-700">Home</a></li>
          <li className='hover:text-blue-700'><a  href="#about" className="text-white hover:text-blue-700">About</a></li>
          <li className='hover:text-blue-700'><a  href="#projects" className="text-white hover:text-blue-700">Projects</a></li>
          <li className='hover:text-blue-700'><a  href="#skills" className="text-white hover:text-blue-700">Skills</a></li>
        </ul>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu  ${isMenuOpen ? '' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col bg-zinc-900 rounded-lg py-4">
          <li className="bg-zinc-900 p-4 " ><a onClick={closeMenu} href="#" className="block text-white bg-zinc-900 hover:text-blue-700">Home</a></li>
          <li className="bg-zinc-900 p-4 " ><a onClick={closeMenu} href="#about" className="block text-white bg-zinc-900 hover:text-blue-700">About</a></li>
          <li className="bg-zinc-900 p-4 " ><a onClick={closeMenu} href="#projects" className="block text-white bg-zinc-900 hover:text-blue-700">Projects</a></li>
          <li className="bg-zinc-900 p-4 " ><a onClick={closeMenu} href="#skills" className="block text-white bg-zinc-900 hover:text-blue-700">Skills</a></li>
        </ul>
      </div>
    </div>
  );
};

