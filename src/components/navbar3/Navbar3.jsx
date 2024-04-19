import Image from 'next/image'
import React from 'react'

const Navbar3 = () => {
  return (
        <nav className='px-2 py-2 md:py-3 flex items-center justify-between w-full md:w-5/6 mx-auto'>
            <div className='relative w-[30px] h-[30px] md:w-[100px] md:h-[100px]'>
                <Image alt="image" fill={true} src={'/image5.png'}></Image>
            </div>
            <div className='text-[9px] gap-[1px] md:gap-0 md:text-sm flex items-center justify-between w-7/12'>
              <span>HOME</span>
              <span>UJAMA</span>
              <span>ABOUT US</span>
              <span>SUPPORT US</span>
              <span>CONTACT</span>
            </div>
            <button className='flex justify-center items-center border-[2px] border-white rounded-md gap-2 bg-gradient-to-b from-[#FF1111] to-[#692323] px-2 py-1 md:px-6 md:py-3 '>
                <div className='relative h-[15px] w-[20px] '>
                    <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                </div>
                <span className='text-xs md:text-sm font-medium'>COMMUNITY FORMS</span>
            </button>
        </nav>
  )
}

export default Navbar3