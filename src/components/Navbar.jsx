import React, { useState } from 'react';

// SVG for the shopping cart icon
const ShoppingCartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);

export default function Navbar({ onToggleCart, cartItemCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-gray-800 p-4 flex justify-between items-center lg:justify-center lg:w-full ${isMobileMenuOpen ? 'w-full border-t-2 border-gray-900' : ''}`}>
      <div className="lg:flex items-center space-x-4 justify-center w-full">
        <div className={`lg:flex items-center space-x-4 ${isMobileMenuOpen ? 'justify-center' : 'hidden lg:flex'}`}>
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white">Order</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white">Null</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white">About Us</a>
        </div>
      </div>

      <div className="lg:flex items-center space-x-4">
        <button
          type="button"
          className="text-gray-300 hover:bg-gray-700 hover:text-white relative"
          onClick={onToggleCart}
        >
          {ShoppingCartIcon}
          {cartItemCount > 0 && (
            <span className="absolute right-4 bottom-3 inline-block bg-black text-white rounded-full px-1.5  text-xs">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>

      <button
        type="button"
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </nav>
  );
}
