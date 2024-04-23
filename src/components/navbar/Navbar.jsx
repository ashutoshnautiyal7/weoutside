"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = ({user}) => {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <nav className='px-2 py-2 md:py-3 flex items-center justify-between w-full md:w-5/6 mx-auto'>
        <Link href={"/"} className='relative w-[30px] h-[30px] md:w-[70px] md:h-[70px]'>
            <Image alt="image" fill={true} src={'/image5.png'}></Image>
        </Link>
        <div className='text-[9px] gap-[1px] md:gap-0 md:text-sm hidden md:flex items-center justify-between w-9/12'>
          <Link href="/">HOME</Link>
          <Link href="/ujaama">UJAMA</Link>
          <Link href="/">ABOUT US</Link>
          <Link href="/">SUPPORT US</Link>
          <Link href="/#footer">CONTACT</Link>
          <Link href="/rnb">R&B MUSIC</Link>
        </div>
        {user?
        <div className=" md:flex hidden items-center justify-start gap-2">
          <div className="relative h-[30px] w-[30px] md:h-[50px] md:w-[50px]">
            <Image alt="image" fill={true} src={"/Ellipse_3.png"}></Image>
          </div>
          <span className='gap-0.5 md:gap-1 font-bold text-[13px] md:text-xl text-red-600'>{user.name}</span>
        </div>
        :
        <Link href={"/login"} className='md:flex hidden gap-0.5 md:gap-1 font-bold text-[13px] md:text-xl'>
            <span className='text-red-600'>Login</span>
            <span>▼</span>
        </Link>
        }
        <div>
          <button onClick={()=>{setOpenMenu(!openMenu)}} className='relative h-[32px] w-[32px] flex md:hidden'>
            <Image fill={true} src={"/hamburger.png"}></Image>
          </button>
          {openMenu&&
            <div className='absolute top-10 right-2 flex md:hidden flex-col bg-slate-400 gap-[1px] border-[2px] border-slate-400 text-black text-xs'>
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
              <Link href="/rnb" className='p-3 bg-white flex justify-center items-center'>
              R&B MUSIC
              </Link>
              {!user&&<Link href="/login" className='p-3 bg-white flex justify-center items-center'>
                LOGIN
              </Link>}
            </div>
          }
        </div>
    </nav>
  )
}

export default Navbar