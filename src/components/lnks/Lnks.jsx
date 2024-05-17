import Link from 'next/link'
import React from 'react'

const Lnks = ({user,data}) => {

  const handleLogOut=async()=>{
    var Cookies = document.cookie.split(';');
    for (var i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=; expires="+ new Date(0).toUTCString();
    }
    location.reload();
  }

  return (
    <div className='hidden md:block relative z-50'>
        <div className='bg-white rounded-l-sm relative top-2 left-5 p-1.5  w-[1.5px] h-[1.5px] rotate-45'>

        </div>
        <div className='bg-white flex flex-col gap-2 text-black p-5 font-medium rounded-md text-sm'>
            {
                data.map((d)=>(
                    <Link key={d.id} href={d.link}>{d.title}</Link>
                ))
            }
            {user==="user"&&
            <h6 className='cursor-pointer' onClick={handleLogOut}>Log out</h6>}
        </div>
    </div>
  )
}

export default Lnks