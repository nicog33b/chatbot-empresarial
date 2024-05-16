'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
          <div className="flex items-center justify-center h-full">
            <Link href='/'>
  <div className="flex-shrink-0  hover:scale-110 cursor pointer">
    <Image src='/logo-final.png' alt='Pizza business logo' width={50} height={50} className="object-contain" />
  </div>
  </Link>
</div>
<div className="md:flex flex items-center relative justify-center">
  <button className="text-gray-900 hover:text-red-500 px-1 py-1 rounded-md text-xs font-light relative">
    <FaShoppingCart size={20} className="relative" />
    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">3</span>
  </button>
</div>


          </div>
        </div>
    
      </nav>

      <nav className="bg-white shadow-lg mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
            <MdChevronLeft size={24} />
          </button>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium active:border active:border-yellow-200">BURGERS</a>
            <a href="#" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">PIZZAS</a>
            <a href="#" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">DRINKS</a>
          </div>
          <button className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
            <MdChevronRight size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
