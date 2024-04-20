"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar2 = () => {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <nav className='px-2 py-2 md:py-3 flex items-center justify-between w-full md:w-5/6 mx-auto'>
        <div className='relative w-[30px] h-[30px] md:w-[100px] md:h-[100px]'>
            <Image alt="image" fill={true} src={'/image5.png'}></Image>
        </div>
        <div className='text-[9px] gap-[1px] md:gap-0 md:text-sm hidden md:flex items-center justify-between w-7/12'>
          <Link href={"/"}>HOME</Link>
          <Link href={"/ujaama"}>UJAMA</Link>
          <Link href={"/"}>ABOUT US</Link>
          <Link href={"/"}>SUPPORT US</Link>
          <Link href={"/"}>CONTACT</Link>
        </div>
        <div className='relative md:flex hidden h-[30px] w-[75px] md:h-[45px] md:w-[100px]'>
          <Image alt="image" fill={true} src={"/rnbbutton.png"}></Image>
        </div>
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
              <Link href="/" className='p-3 bg-white flex justify-center items-center'>
                CONTACT
              </Link>
              <Link href="/" className='p-3 bg-white flex justify-center items-center'>
                R&B MUSIC
              </Link>
            </div>
          }
        </div>
    </nav>
  )
}

export default Navbar2