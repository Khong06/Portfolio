import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-dark font-medium text-lg
    dark:text-light dark:border-light sm:text-base
    '>
      <Layout className='flex flex-col py-8 sm:flex-row items-center justify-between lg:flex-col lg:py-6'>
        <div className='flex items-center lg:py-2'>
          <span className='mr-12'>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
          <span className='flex items-center sm:pl-2'> {/* Responsive padding between the date and the text */}
            Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&hearts;</span><Link href="/">by Yik Khong Ho</Link>
          </span>
        </div>
      </Layout>
    </footer>
  );
}


export default Footer;
