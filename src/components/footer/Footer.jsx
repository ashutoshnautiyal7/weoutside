import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center mx-16 my-16'>
        <div className='flex flex-col items-start w-[18%]'>
            <div className='flex gap-1.5 justify-center items-center mb-2'>
                <Image width={40} height={40} src={'/image5.png'}></Image>
                <span className='text-sm font-semibold'>We Outside</span>
            </div>
            <p className='tracking-wide'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>
        <div className='w-[18%] flex flex-col gap-5'>
            <h5 className='font-semibold'>Company</h5>
            <span>About</span>
            <span>Career</span>
            <span>Mobile</span>
        </div>
        <div className='w-[18%] flex flex-col gap-5'>
            <h5 className='font-semibold'>Contact</h5>
            <span>Why Weoutside</span>
            <span>Partner with us</span>
            <span>FAQ's</span>
            <span>Support us</span>
        </div>
        <div className='w-[18%] flex flex-col gap-5'>
            <h5 className='font-semibold'>Meet Us</h5>
            <span>+00 92 1234 56789</span>
            <span>info@weoutside.com</span>
            <span>205. R Street, New York</span>
            <span>BD23200</span>
        </div>
    </div>
  )
}

export default Footer