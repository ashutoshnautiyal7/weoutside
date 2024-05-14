"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Lnks from '../lnks/Lnks';
import GetCookie from '../getCookie/GetCookie';

const serv=[
  {
    id:0,
    title:"Fundraising",
    link:"/fundraising"
  },
  {
    id:1,
    title:"Legal Support",
    link:"/legalsupport"
  },
  {
    id:2,
    title:"Business",
    link:"/business"
  },
];
const supp=[
  {
    id:0,
    title:"My Mama Told Me",
    link:"/mymamatoldme"
  },
  {
    id:1,
    title:"MELENATED LIFES MATTER",
    link:"/melenatedlifesmatter"
  },
  {
    id:2,
    title:"Business",
    link:"/business"
  },
];
const prof=[
  {
    id:0,
    title:"Community",
    link:"/community"
  },
  {
    id:1,
    title:"Profile",
    link:"/profile"
  },
  {
    id:2,
    title:"Donation",
    link:"/donation"
  },
  {
    title:"Log out",
    link:"/logout"
  },
]
const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)
  const [services,setServices]=useState(false);
  const [support,setSupport]=useState(false);
  const [profile,setProfile]=useState(false);
  const token=typeof window !== "undefined" ? GetCookie("token")  : null;
  const [user,setUser]=useState("");

  useEffect(() => {
      if(token)
      setUser(typeof window !== "undefined" ? JSON.parse(GetCookie(token)):null);
  }, []);
  return (
    <nav className='px-2 py-2 md:py-3 flex items-center justify-between w-full md:w-5/6 mx-auto'>
        <Link href={"/"} className='relative w-[30px] h-[30px] md:w-[70px] md:h-[70px]'>
            <Image alt="image" fill={true} src={'/image5.png'}></Image>
        </Link>
        <div className='text-[9px] gap-[1px] md:gap-0 md:text-sm hidden md:flex items-center justify-between w-8/12'>
          <Link href="/">HOME</Link>
          <div className=''>
            <span className='cursor-pointer' onClick={()=>{setServices(!services)}} href="/">SERVICES</span>
            {services&&<div className='absolute'>
              <Lnks data={serv}/>
            </div>}
          </div>
          <Link href="/ujaama">UJAMA</Link>
          <div>
            <span onClick={()=>{setSupport(!support)}} className='cursor-pointer'>SUPPORT US</span>
            {
              support&&<div className='absolute'>
              <Lnks data={supp}/>
            </div>
            }
          </div>
          <Link href="/#footer">CONTACT</Link>
          <Link href="/rnb">R&B MUSIC</Link>
        </div>
        {user?
        <div onClick={()=>{setProfile(!profile)}}>
          <div className="cursor-pointer md:flex hidden items-center justify-start gap-2">
            <div className="relative h-[30px] w-[30px] md:h-[40px] md:w-[40px]">
              <Image alt="image" fill={true} src={"/Ellipse_3.png"}></Image>
            </div>
            <span className='gap-0.5 md:gap-1 font-bold text-[13px] md:text-xl text-white'>{user.name}</span>
          </div>
            {
              profile&&<div className='absolute'>
              <Lnks data={prof}/>
            </div>
            }
        </div>
        :
        <Link href={"/login"} className='bg-white md:flex hidden gap-0.5 px-5 py-1 rounded-md md:gap-1 font-bold text-md md:text-xl'>
            <span className='text-red-600 text-sm'>Login</span>
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
              {/* <Link href="/" className='p-3 bg-white flex justify-center items-center'>
                ABOUT US
              </Link> */}
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