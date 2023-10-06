'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

 
const services = [
    {url: "/software-solutions", title: "SOFTWARE SOLUTIONS"},
    {url: "/it-services", title: "IT SERVICES"},
    {url: "/offshore-outsourcing", title: "OFFSHORE OUTSOURCING"},
    {url: "/training-development", title: "TRAINING & DEVELOPMENT"},
    {url: "/technology-advisory", title: "TECHNOLOGY ADVISORY & PROJECT MANAGEMENT"},
]

const careers = [
    {url: "/career-techone", title: "CAREERS AT TECHONE"},
    {url: "/techone-academy", title: "TECHONE ACADEMY"},
]

export default function Header() {
  
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [dropDownOpen, isDropDownOpen] = useState(false)
  const [careerDropDown, isCareerDropDown] = useState(false)
  
    function openDropDown() {
        isDropDownOpen(true)
    }

    function closeDropDown() {
        isDropDownOpen(false)
    }

    function toggleDropDown() {
        isDropDownOpen(true)
    }

    function DropDownClose() {
        isCareerDropDown(false)
    }

  const pathname = usePathname()

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <nav className="bg-[#040021] py-4">
      <div className="container mx-auto flex items-center justify-around">
        <Link href={"/"}>
            <Image 
            src={"/techlogo.png"} 
            width={200}
            height={100}
            priority
            alt='Techone Logo'
            />
        </Link>
        <ul className="flex space-x-4">
          <li className="relative group">
            <Link
              href="/"
              className={`${
                activeNavItem === 'home'
                  ? 'text-[#fbce0b] font-semibold border-b-2 border-[#fbce0b]'
                  : 'text-gray-300'
              } hover:text-[#fbce0b] hover:border-b-2 hover:border-[#fbce0b] transition-all duration-300`}
              onClick={() => handleNavItemClick('home')}
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/about"
              className={`${
                activeNavItem === 'about'
                  ? 'text-[#fbce0b] font-semibold border-b-2 border-[#fbce0b]'
                  : 'text-gray-200'
              } hover:text-[#fbce0b] hover:border-b-2 hover:border-[#fbce0b] transition-all duration-300`}
              onClick={() => handleNavItemClick('about')}
            >
              About
            </Link>
          </li>

          <div className="relative pb-3"
          onMouseLeave={closeDropDown}
          onMouseEnter={openDropDown}
          >
            <button
            className='hover:text-yellow-300' 
            >Our services</button>
            {dropDownOpen && (
                <div className="absolute mt-2 origin-top-right transition-all duration-300  shadow-lg md:w-48 top-5">
                  <div 
                  className="px-2 pt-2 bg-white shadow flex flex-col text-start w-72 border-t-4 border-t-[#fbce0b]"
                  >
                    {services.map((service) =>
                        <Link href={service.url}
                        className='hover:text-[#fbce0b] hover:border-[#fbce0b] pt-2 my-2 text-start border-t-2'
                        >{service.title}</Link>
                    )}
                  </div>
                </div>
              )}
          </div>

          <li className="relative group">
            <Link
              href="/offshore"
              className={`${
                activeNavItem === 'insight'
                  ? 'text-[#fbce0b] font-semibold border-b-2 border-[#fbce0b]'
                  : 'text-gray-200'
              } hover:text-[#fbce0b] hover:border-b-2 hover:border-[#fbce0b] transition-all duration-300`}
              onClick={() => handleNavItemClick('offshore')}
            >
              Offshore Outsourcing
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/insight"
              className={`${
                activeNavItem === 'insight'
                  ? 'text-[#fbce0b] font-semibold border-b-2 border-[#fbce0b]'
                  : 'text-gray-200'
              } hover:text-[#fbce0b] hover:border-b-2 hover:border-[#fbce0b] transition-all duration-300`}
              onClick={() => handleNavItemClick('insight')}
            >
              Insight
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/career"
              className={`${
                activeNavItem === 'career'
                  ? 'text-[#fbce0b] font-semibold border-b-2 border-[#fbce0b]'
                  : 'text-gray-200'
              } hover:text-[#fbce0b] hover:border-b-2 hover:border-[#fbce0b] transition-all duration-300`}
              onClick={() => handleNavItemClick('career')}
            >
              Career
            </Link>
          </li>

          <div className="relative pb-3"
          onMouseLeave={DropDownClose}
          onMouseEnter={toggleDropDown}
          >
            <button
            className='hover:text-yellow-300' 
            >Career</button>
            {careerDropDown && (
                <div className="absolute mt-2 origin-top-right transition-all duration-300  shadow-lg md:w-48 top-5">
                  <div 
                  className="px-2 pt-2 bg-white shadow flex flex-col text-start w-72 border-t-4 border-t-[#fbce0b]"
                  >
                    {careers.map((career) =>
                        <Link href={career.url}
                        className='hover:text-[#fbce0b] hover:border-[#fbce0b] pt-2 my-2 text-start border-t-2'
                        >{career.title}</Link>
                    )}
                  </div>
                </div>
              )}
          </div>
          <li className="relative group">
            <Link
              href="/contact"
              className={`${
                activeNavItem === 'contact'
                  ? 'text-[#fbce0b] font-semibold border-b-2 border-[#fbce0b]'
                  : 'text-gray-200'
              } hover:text-[#fbce0b] hover:border-b-2 hover:border-[#fbce0b] transition-all duration-300`}
              onClick={() => handleNavItemClick('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}