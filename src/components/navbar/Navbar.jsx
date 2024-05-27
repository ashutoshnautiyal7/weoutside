"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Lnks from '../lnks/Lnks';
import GetCookie from '../getCookie/GetCookie';

const serv = [
  {
    id: 0,
    title: "Fundraising",
    link: "/fundraising"
  },
  {
    id: 1,
    title: "Legal Support",
    link: "/legalsupport"
  },
  {
    id: 2,
    title: "Business",
    link: "/business"
  },
];
const supp = [
  {
    id: 0,
    title: "My Mama Told Me",
    link: "/mymamatoldme"
  },
  {
    id: 1,
    title: "MELENATED LIFES MATTER",
    link: "/melenatedlifesmatter"
  },
  {
    id: 2,
    title: "Business",
    link: "/business"
  },
];
const prof = [
  {
    id: 0,
    title: "Community",
    link: "/community"
  },
  {
    id: 1,
    title: "Profile",
    link: "/profile/editprofile"
  },
  {
    id: 2,
    title: "Donation",
    link: "/payment"
  },
  // {
  //   title: "Log out",
  //   link: "/logout"
  // },
]

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [services, setServices] = useState(false);
  const [support, setSupport] = useState(false);
  const [profile, setProfile] = useState(false);
  const token = typeof window !== "undefined" ? GetCookie("token") : null;
  const [user, setUser] = useState("");

  useEffect(() => {
    if (token)
      setUser(typeof window !== "undefined" ? JSON.parse(GetCookie(token)) : null);
  }, []);
  
  const handleLogOut=async()=>{
    var Cookies = document.cookie.split(';');
    for (var i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=; expires="+ new Date(0).toUTCString();
    }
    location.reload();
  }

  return (
    <nav className='px-2 py-2 md:py-3 flex items-center justify-between w-full md:w-11/12 mx-auto'>
      <Link href={"/"} className='relative w-[30px] h-[30px] md:w-[70px] md:h-[70px]'>
        <Image alt="image" fill={true} src={'/image5.png'}></Image>
      </Link>
      <div className='text-[9px] gap-[1px] md:gap-0 md:text-sm hidden md:flex items-center justify-between w-8/12'>
        <Link href="/">HOME</Link>
        <div className='relative'>
          <span className='cursor-pointer' onClick={() => { setServices(!services) }}>SERVICES</span>
          {services && <div className='absolute'>
            <Lnks data={serv} />
          </div>}
        </div>
        <Link href="/ujaama">UJAMA</Link>
        <div className='relative'>
          <span onClick={() => { setSupport(!support) }} className='cursor-pointer'>SUPPORT US</span>
          {
            support && <div className='absolute'>
              <Lnks data={supp} />
            </div>
          }
        </div>
        <Link href="/#footer">CONTACT</Link>
        <Link href="/rnb">R&B MUSIC</Link>
      </div>
      {user ?
        <div className='relative' onClick={() => { setProfile(!profile) }}>
          <div className="cursor-pointer md:flex hidden items-center justify-start gap-2">
            <div className="relative h-[30px] w-[30px] md:h-[40px] md:w-[40px] ">
              <Image className='rounded-full' alt="image" fill={true} src={user.image?user.image:"/prof.jpg"}></Image>
            </div>
            <span className='gap-0.5 md:gap-1 font-bold text-[13px] md:text-xl text-white'>{user.name}</span>
          </div>
          {
            profile && <div className='absolute'>
              <Lnks user={"user"} data={prof} />
            </div>
          }
        </div>
        :
        <Link href={"/login"} className='bg-white md:flex hidden gap-0.5 px-5 py-1 rounded-md md:gap-1 font-bold text-md md:text-xl'>
          <span className='text-red-600 text-sm'>Login</span>
        </Link>
      }
      <div>
        <button onClick={() => { setOpenMenu(!openMenu) }} className='relative h-[32px] w-[32px] flex md:hidden'>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={!openMenu ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
            />
          </svg>
        </button>
        <div
          className={`${
            openMenu ? 'translate-x-0' : '-translate-x-full'
          } transform z-10 fixed top-0 left-0 w-3/4 h-full bg-black p-4 transition-transform duration-300 ease-in-out lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0 lg:flex lg:items-center`}
        >
          <ul className="text-white md:hidden lg:justify-between lg:space-x-6 space-y-4 lg:space-y-0">
            <li>
              <Link href="/" className="hover:underline" onClick={() => setOpenMenu(false)}>
                HOME
              </Link>
            </li>
            <li>
              <div>
                <span className="hover:underline cursor-pointer" onClick={() => setServices(!services)}>SERVICES</span>
                {services && (
                  <div className="mt-2 ml-2">
                    {serv.map((service) => (
                      <Link key={service.id} href={service.link} className="block hover:underline" onClick={() => setOpenMenu(false)}>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link href="/ujaama" className="hover:underline" onClick={() => setOpenMenu(false)}>
                UJAMA
              </Link>
            </li>
            <li>
              <div>
                <span className="hover:underline cursor-pointer" onClick={() => setSupport(!support)}>SUPPORT</span>
                {support && (
                  <div className="mt-2 ml-2">
                    {supp.map((item) => (
                      <Link key={item.id} href={item.link} className="block hover:underline" onClick={() => setOpenMenu(false)}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link href="/#footer" className="hover:underline" onClick={() => setOpenMenu(false)}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link href="/rnb" className="hover:underline" onClick={() => setOpenMenu(false)}>
                R & B MUSIC
              </Link>
            </li>
            {user && (
              <li>
                <div>
                  <span className="hover:underline cursor-pointer" onClick={() => setProfile(!profile)}>{user.name}</span>
                  {profile && (
                    <div className="mt-2 ml-2 flex flex-col">
                      {prof.map((item, index) => (
                        <Link key={index} href={item.link} className="hover:underline" onClick={() => setOpenMenu(false)}>
                          {item.title}
                        </Link>
                      ))}
                      {user&&
                      <h6 className='cursor-pointer' onClick={handleLogOut}>Log out</h6>}
                    </div>
                  )}
                </div>
              </li>
            )}
            {!user && (
              <li>
                <Link href="/login" className="hover:underline" onClick={() => setOpenMenu(false)}>
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
