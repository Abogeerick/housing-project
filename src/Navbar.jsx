import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <ul className="flex items-center justify-between px-4 py-3">
        <li><a href="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">Home</a></li>
        <li className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="px-3 py-2 text-gray-700 hover:text-gray-900">Houseplans</button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plan 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plan 2</a>
            </div>
          )}
        </li>
        <li><a href="/about" className="px-3 py-2 text-gray-700 hover:text-gray-900">About Us</a></li>
        <li><a href="/contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">Contact Us</a></li>
        <li><a href="/blog" className="px-3 py-2 text-gray-700 hover:text-gray-900">Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
