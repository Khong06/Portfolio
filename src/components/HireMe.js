import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    sm:right-0
    '>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className={"fill-black animate-spin-slow dark:fill-light"} />
        <Link href="mailto:yik.khong06@gmail.com" className='flex items-center justify-center
        absolute left-right-1/2 top -1/2 translate-x translate-y
        bg-dark text-light shadow-md border border-solid border-black w-20 h-20 rounded-full
        font-semidbold hover:bg-light hover:text-black
        dark:bg-light
         dark:text-black hover:dark:bg-black hover:dark:text-light
        hover:dark:border-light md:w-12 md:h-12 md:text-[10px]
        '>Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
