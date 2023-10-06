'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import  { useState } from 'react';

function Navbar() {
  // const [activeNavItem, setActiveNavItem] = useState(null);

  // const handleNavItemClick = (itemName) => {
  //   setActiveNavItem(itemName);
  // };

  const router = useRouter()

  return (
    <nav className="bg-blue-200 py-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-yellow-400 text-2xl font-semibold">Your Logo</h1>
        <ul className="flex space-x-4">
          <li className="relative group">
            <Link
              href="/"
              className={`${
                router.pathname === '/'
                  ? 'text-white font-semibold border-b-2 border-white'
                  : 'text-gray-300'
              } hover:text-white hover:border-b-2 hover:border-white transition-all duration-300`}
              // onClick={() => handleNavItemClick('home')}
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/about"
              className={`${
                router.pathname === '/about'
                  ? 'text-white font-semibold border-b-2 border-white'
                  : 'text-gray-300'
              } hover:text-white hover:border-b-2 hover:border-white transition-all duration-300`}
              // onClick={() => handleNavItemClick('about')}
            >
              About
            </Link>
          </li>
          <li className="relative group">
            <a
              href="#services"
              className={`${
                router === 'services'
                  ? 'text-white font-semibold border-b-2 border-white'
                  : 'text-gray-300'
              } hover:text-white hover:border-b-2 hover:border-white transition-all duration-300`}
              onClick={() => handleNavItemClick('services')}
            >
              Services
            </a>
          </li>
          <li className="relative group">
            <a
              href="#contact"
              className={`${
                router === 'contact'
                  ? 'text-white font-semibold border-b-2 border-white'
                  : 'text-gray-300'
              } hover:text-white hover:border-b-2 hover:border-white transition-all duration-300`}
              onClick={() => handleNavItemClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
