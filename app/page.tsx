"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dial from '../public/assets/images/landing-page/watch-dial.png';
import Band from '../public/assets/images/landing-page/watch-band.jpeg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);
  return (
    <>
      <div className={`mx-auto transition-opacity ease-in-out duration-[700ms] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className='w-[42.352rem] mx-auto'>
          <p className='pb-2.5 text-[1.313rem] font-normal tracking-[.011em] leading-[1.381]'>
            Apple Watch Studio
          </p>
          <div>
            <p className='text-[4rem] font-semibold tracking-[-.125rem] leading-[1.0625]'>
              Choose a case.
            </p>
            <p className='text-[4rem] font-semibold tracking-[-.125rem] leading-[1.0625]'>
              Pick a band.
            </p>
            <p className='text-[4rem] font-semibold tracking-[-.125rem] leading-[1.0625]'>
              Create your own style.
            </p>
          </div>
          <div className='mt-[2.688rem]'>
            <Link href='/HomeSelection'>
              <button className="px-[22px] py-[12px] min-w-[70px] text-[17px] font-normal tracking-[-.022em] leading-[1.176] bg-[#0071e3] text-white rounded-full">
                Get started
              </button>
            </Link>
          </div>
        </div>
        <div className='w-[52vw] mx-auto relative'>
          <Image src={Dial} alt='watch-dial' className='absolute left-[5%] z-10' />
          <Image src={Band} alt='watch-band' className='absolute left-[5.25%]' />
        </div>
      </div>
    </>
  );
}
