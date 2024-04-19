import Image from 'next/image'
import React from 'react';

const Navbar = () => {
  return (
    <nav className='px-2 py-2 md:py-3 flex items-center justify-between w-full md:w-5/6 mx-auto'>
        <div className='relative w-[30px] h-[30px] md:w-[70px] md:h-[70px]'>
            <Image alt="image" fill={true} src={'/image5.png'}></Image>
        </div>
        <div className='text-[9px] gap-[1px] md:gap-0 md:text-sm flex items-center justify-between w-9/12'>
          <span>HOME</span>
          <span>UJAMA</span>
          <span>ABOUT US</span>
          <span>SUPPORT US</span>
          <span>CONTACT</span>
          <span>R&B MUSIC</span>
        </div>
        <div className='flex gap-0.5 md:gap-1 font-bold text-[13px] md:text-xl'>
            <span className='text-red-600'>Login</span>
            <span>▼</span>
        </div>
    </nav>
  )
}

export default Navbar