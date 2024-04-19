import Image from 'next/image'
import React from 'react'

const Navbar2 = () => {
  return (
    <nav className='px-2 py-2 md:py-3 flex items-center justify-between w-full md:w-5/6 mx-auto'>
        <div className='relative w-[30px] h-[30px] md:w-[100px] md:h-[100px]'>
            <Image fill={true} src={'/image5.png'}></Image>
        </div>
        <div className='text-[9px] gap-[1px] md:gap-0 md:text-sm flex items-center justify-between w-7/12'>
          <span>HOME</span>
          <span>UJAMA</span>
          <span>ABOUT US</span>
          <span>SUPPORT US</span>
          <span>CONTACT</span>
        </div>
        <div className='relative h-[30px] w-[75px] md:h-[45px] md:w-[100px]'>
          <Image fill={true} src={"/rnbbutton.png"}></Image>
        </div>
    </nav>
  )
}

export default Navbar2