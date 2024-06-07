import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='flex flex-wrap gap-5 md:gap-1 justify-between'>
        <div className='flex flex-col gap-2 w-full md:w-[28%]'>
            <div className='flex gap-4 w-full'>
                <div className='flex gap-1.5 items-center w-full'>
                    <Image alt="image" width={40} height={40} src={'/image5.png'}></Image>
                    <span className='w-full text-sm md:text-lg font-semibold'>We Outside</span>
                </div>
                <div className='flex gap-3 items-center w-full'>
                    <Link href={'#'}><Image className='w-[20px] h-[20px] md:w-[26px] md:h-[24px]' height={1000} width={1000} src={"/fb.png"}></Image></Link>
                    <Link href={'#'}><Image className='w-[20px] h-[20px] md:w-[26px] md:h-[24px]' height={1000} width={1000} src={"/ig.png"}></Image></Link>
                    <Link href={'#'}><Image className='w-[24px] h-[20px] md:w-[32px] md:h-[24px]' height={1000} width={1000} src={"/tw.png"}></Image></Link>
                    <Link href={'#'}><Image className='w-[24px] h-[20px] md:w-[34px] md:h-[24px]' height={1000} width={1000} src={"/yt.png"}></Image></Link>
                </div>
            </div>
            <p className='text-xs md:text-lg font-medium text-center md:text-left md:w-5/6 py-2 md:py-0'>We Outside is dedicated to empowering the melanated community through support, resources, and initiatives that celebrate our culture and drive collective success. Join us to connect, grow, and thrive together.</p>
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