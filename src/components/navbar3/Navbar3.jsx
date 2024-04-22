"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar3 = () => {
  const [openMenu,setOpenMenu]=useState(false)
  return (
        <nav className='px-2 py-2 md:py-3 flex items-center justify-between w-full md:w-5/6 mx-auto'>
            <Link href={"/"} className='relative w-[30px] h-[30px] md:w-[100px] md:h-[100px]'>
                <Image alt="image" fill={true} src={'/image5.png'}></Image>
            </Link>
            <div className='text-[9px] gap-[1px] md:gap-0 md:text-sm hidden md:flex items-center justify-between w-7/12'>
              <Link href={"/"}>HOME</Link>
              <Link href={"/ujaama"}>UJAMA</Link>
              <Link href={"/"}>ABOUT US</Link>
              <Link href={"/"}>SUPPORT US</Link>
              <Link href={"/#footer"}>CONTACT</Link>
            </div>
            <div>
              <button className='hidden md:flex justify-center items-center border-[2px] border-white rounded-md gap-2 bg-gradient-to-b from-[#FF1111] to-[#692323] px-2 py-1 md:px-6 md:py-3 '>
                  <div className='relative h-[10px] w-[15px] md:h-[15px] md:w-[20px] '>
                      <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                  </div>
                  <span className='text-xs md:text-sm font-medium'>COMMUNITY FORMS</span>
              </button>
              <div>
              <button onClick={()=>{setOpenMenu(!openMenu)}} className='relative h-[32px] w-[32px] flex md:hidden'>
                <Image fill={true} src={"/hamburger.png"}></Image>
              </button>
              {openMenu&&
                <div className='absolute md:hidden z-10 top-10 right-2 flex md:Link flex-col bg-slate-400 gap-[1px] border-[2px] border-slate-400 text-black text-xs'>
                  <Link href="/" className='p-3 bg-white flex justify-center items-center'>
                    HOME
                  </Link>
                  <Link href="/ujaama" className='p-3 bg-white flex justify-center items-center'>
                    UJAMA
                  </Link>
                  <Link href="/" className='p-3 bg-white flex justify-center items-center'>
                    ABOUT US
                  </Link>
                  <Link href="/" className='p-3 bg-white flex justify-center items-center'>
                    SUPPORT US
                  </Link>
                  <Link href="/#footer" className='p-3 bg-white flex justify-center items-center'>
                    CONTACT
                  </Link>
                  <Link href="/" className='p-3 bg-white flex justify-center items-center'>
                    COMMUNITY FORMS
                  </Link>
                </div>
              }
            </div>
            </div>
        </nav>
  )
}

export default Navbar3