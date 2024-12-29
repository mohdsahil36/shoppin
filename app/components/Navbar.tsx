"use client";

import React, { useState} from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import Logo from '../../public/assets/images/landing-page/apple-watch-design-studio-logo.jpeg';

export default function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathname = usePathname();

  const togglePopup = () => {
    setIsPopupOpen((prevState) => !prevState);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const isHomePage = pathname === '/';
  return (
    <div className='relative'>
      <div className='flex items-center p-6 mb-20 justify-between'>
        <div>
          <Image src={Logo} alt='store-logo' height={20} width={90} />
        </div>
        {!isHomePage && (
          <div>
            <p
              className='cursor-pointer flex items-center'
              onClick={togglePopup}
            >
              Collections <ChevronDown size={16} />
            </p>
          </div>
        )}
        {!isHomePage && (
            <div>
                <button className='text-[0.875rem] font-normal tracking-[-.016rem] leading-[1.285] px-[0.9rem] py-[0.5rem] bg-[#0071e3] text-white rounded-full'>
                Save
                </button>
            </div>
        )}
      </div>

      {!isHomePage && isPopupOpen && (
        <>
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-10'
            onClick={closePopup}
          ></div>

          <div className='w-80 h-auto absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg z-20'>
            <ul className='space-y-2 px-[1.625rem]'>
              <li
                className='cursor-pointer text-[1.063rem] hover:text-[#06c] border-b border-[#d2d2d7] py-[1.125rem] text-center'
                onClick={closePopup}
              >
                Apple&nbsp;Watch&nbsp;Series&nbsp;10
              </li>
              <li
                className='cursor-pointer text-[1.063rem] hover:text-[#06c] border-b border-[#d2d2d7] py-[1.125rem] text-center'
                onClick={closePopup}
              >
                Apple&nbsp;Watch&nbsp;Hermès&nbsp;Series&nbsp;10
              </li>
              <li
                className='cursor-pointer text-[1.063rem] hover:text-[#06c] py-[1.125rem] text-center'
                onClick={closePopup}
              >
                Apple&nbsp;Watch&nbsp;SE
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
