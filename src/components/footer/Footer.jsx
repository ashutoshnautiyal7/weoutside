import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-wrap gap-5 md:gap-1 justify-between'>
        <div className='flex flex-col gap-2 w-[40%] md:w-[18%]'>
            <div className='flex gap-1.5 items-center'>
                <Image width={40} height={40} src={'/image5.png'}></Image>
                <span className='text-sm md:text-lg font-semibold'>We Outside</span>
            </div>
            <p className='text-xs md:text-lg font-medium'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>
        <div className='text-xs md:text-sm w-[40%] md:w-[18%] flex flex-col gap-2 md:gap-5'>
            <h5 className='text-sm md:text-lg font-semibold'>Company</h5>
            <span>About</span>
            <span>Career</span>
            <span>Mobile</span>
        </div>
        <div className='text-xs md:text-sm w-[40%] md:w-[18%] flex flex-col gap-2 md:gap-5'>
            <h5 className='text-sm md:text-lg font-semibold'>Contact</h5>
            <span>Why Weoutside</span>
            <span>Partner with us</span>
            <span>FAQ&apos;s</span>
            <span>Support us</span>
        </div>
        <div className='text-xs md:text-sm w-[40%] md:w-[18%] flex flex-col gap-2 md:gap-5'>
            <h5 className='text-sm md:text-lg font-semibold'>Meet Us</h5>
            <span>+00 92 1234 56789</span>
            <span>info@weoutside.com</span>
            <span>205. R Street, New York</span>
            <span>BD23200</span>
        </div>
    </div>
  )
}

export default Footer