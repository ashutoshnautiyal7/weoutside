import Image from 'next/image'
import React from 'react'

const Navbar2 = () => {
  return (
    <div className='px-12 py-5 flex items-center justify-center gap-[200px]'>
        <div className='relative top-3'>
            <Image width={80} height={80} src={'/image5.png'}></Image>
        </div>
        <div className='text-xs flex items-center justify-center gap-[80px]'>
          <span>HOME</span>
          <span>UJAMA</span>
          <span>ABOUT US</span>
          <span>SUPPORT US</span>
          <span>CONTACT</span>
        </div>
        <div className='relative h-[50px] w-[100px]'>
            <Image fill={true} src={"/rnb.png"}></Image>
        </div>
    </div>
  )
}

export default Navbar2