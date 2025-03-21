'use client';

import Profile from '../../public/icons/profile';
import ZenUiLogo from '../../public/icons/logo';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const authOptions = [
    { id: 1, name: 'Login', path: '/auth/login' },
    { id: 2, name: 'Sign Up', path: '/auth/signup' },
    { id: 3, name: 'Logout', path: '/' },
  ];

  const toggleDropDown = () => {
    setDropDownVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col sticky top-0 z-10 bg-white">
      <div className="flex justify-between items-center h-20 px-5 sm:px-16">
        {/* Logo */}
        <Link href="/" className="flex justify-between items-center">
          <ZenUiLogo />
          <p className="text-4xl font-semibold ml-1">Zen UI</p>
        </Link>

        {/* Navigation Links */}
        <div className="flex justify-evenly items-center">
          <Link href="/components" className="mr-8">
            Components
          </Link>
          <Link href="/docs" className="mr-8">
            Docs
          </Link>

          {/* Dropdown Section */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              className="inline-flex justify-center text-xl font-semibold"
              id="menu-button"
              aria-expanded={dropDownVisible}
              aria-haspopup="true"
              onMouseEnter={toggleDropDown}
            >
              <Profile />
            </button>

            {/* Dropdown Menu */}
            {dropDownVisible && (
              <div
                className="absolute right-0 z-10 w-40 origin-top-right rounded-md ring-1 shadow-md ring-black/5 bg-white focus:outline-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                {authOptions.map((option) => {
                  return (
                    <Link
                      key={option.id}
                      href={option.path}
                      className="block px-4 py-2 text-md hover:bg-slate-100"
                      role="menuitem"
                    >
                      {option.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
