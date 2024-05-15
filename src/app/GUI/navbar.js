'use client';
    // components/Navbar.js
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                className=" h-16 w-16"
                src="/pizza-logo.avif"
                alt="Pizza Hut"
              />
            </div>
            <div className="hidden md:flex space-x-8 ml-10">
              <a href="#" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">PROMOS EXCLUSIVAS</a>
              <a href="#" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">COMBOS</a>
              <a href="#" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">PIZZAS CLÁSICAS</a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <button className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
              <FaShoppingCart size={20} />
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-red-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-900 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">PROMOS EXCLUSIVAS</a>
            <a href="#" className="text-gray-900 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">COMBOS</a>
            <a href="#" className="text-gray-900 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">PIZZAS CLÁSICAS</a>
            <button className="text-gray-900 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">
              <FaShoppingCart size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

