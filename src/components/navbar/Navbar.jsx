import Image from 'next/image'
import React from 'react';

const Navbar = () => {
  return (
    <div className='mx-12 my-5 flex items-center justify-center gap-[110px]'>
        <div className='relative top-3'>
            <Image width={80} height={80} src={'/image5.png'}></Image>
        </div>
        <div className='text-xs flex items-center justify-center gap-[80px]'>
          <span>HOME</span>
          <span>UJAMA</span>
          <span>ABOUT US</span>
          <span>SUPPORT US</span>
          <span>CONTACT</span>
          <span>R&B MUSIC</span>
        </div>
        <div className='flex gap-1 font-semibold text-base'>
            <span>Login</span>
            <span className='text-xs relative top-1.5'>▼</span>
        </div>
    </div>
  )
}

export default Navbar