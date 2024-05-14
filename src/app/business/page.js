'use client';

import Footer from '@/components/footer/Footer'
import GetinTouch from '@/components/getintouch/GetinTouch'
import Navbar from '@/components/navbar/Navbar';
import Navbar2 from '@/components/navbar2/Navbar2'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col items-center py-5'>
            <div className='text-center text-xl md:text-5xl flex flex-col gap-2 font-semibold leading-4 md:leading-snug'>
                <h1>WE HELP</h1>
                <h1>OUR COMMUNITY FOR</h1>
                <h1>BUSINESS ENCUBATOR <span className='text-red-700'>!</span></h1>
            </div>
            <div className='py-5 md:py-10'>
                <div className='relative object-cover w-[330px] h-[200px] md:w-[1040px] md:h-[468px]'>
                    <Image alt="image" fill={true} src={"/busi.png"}></Image>
                </div>
            </div>
            <button className='flex text-lg md:text-3xl tracking-tight font-semibold justify-center items-center bg-[#D32626] px-3 py-2 md:px-5 md:py-4 rounded-2xl gap-2'>
                LETS CONNECT
                <div className='relative w-[20px] h-[15px] md:w-[30px] md:h-[20px]'>
                    <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                </div>
            </button>
        </div>
        <div className='flex flex-col gap-8 py-8 md:py-16 px-2 md:px-0 md:w-4/6 mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='w-[50%] md:w-[45%]'>
                    <div className='bg-white py-14 w-full flex justify-center items-center rounded-3xl'>
                        <div className='relative h-[120px] w-[125px] md:h-[220px] md:w-[230px]'>
                            <Image alt="image" fill={true} src={"/rocket.png"}></Image>
                        </div>
                    </div>
                </div>
                <div className='w-[48%] md:w-[45%] text-right items-end flex flex-col gap-2 md:gap-3'>
                    <h4 className='text-xl md:text-3xl font-semibold'>Networking Opportunities</h4>
                    <p className='md:w-10/12 text-xs md:text-lg'>Through workshops, seminars, and networking events, participants have the opportunity to connect with other entrepreneurs, industry experts, and potential investors, helping them expand their networks and grow their businesses.</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-[48%] md:w-[45%] items-start flex flex-col gap-3'>
                    <h4 className='text-xl md:text-3xl font-semibold'>Access to Resources</h4>
                    <p className='md:w-10/12 text-xs md:text-lg'>From office space and equipment to legal and financial services, we provide entrepreneurs with access to the resources they need to launch and scale their businesses.</p>
                </div>
                <div className='w-[50%] md:w-[45%]'>
                    <div className='bg-white py-14 w-full flex justify-center items-center rounded-3xl'>
                        <div className='relative h-[120px] w-[125px] md:h-[220px] md:w-[230px]'>
                            <Image alt="image" fill={true} src={"/res.png"}></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-[50%] md:w-[45%]'>
                    <div className='bg-white py-14 w-full flex justify-center items-center rounded-3xl'>
                        <div className='relative h-[120px] w-[125px] md:h-[220px] md:w-[230px]'>
                            <Image alt="image" fill={true} src={"/mentor.png"}></Image>
                        </div>
                    </div>
                </div>
                <div className='w-[48%] md:w-[45%] text-right items-end flex flex-col gap-2 md:gap-3'>
                    <h4 className='text-xl md:text-3xl font-semibold'>Mentorship and Guidance</h4>
                    <p className='md:w-10/12 text-xs md:text-lg'> Participants in our program are paired with experienced mentors who provide guidance, advice, and support as they navigate the challenges of starting and growing a business.</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='flex justify-center items-center border-[1px] border-white rounded-md gap-2 md:gap-5 bg-gradient-to-b from-[#FF1111] to-[#692323] px-6 py-3 md:px-10 md:py-6'>
                <div className='relative h-[20px] w-[25px] md:h-[25px] md:w-[40px]'>
                    <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                </div>
                <span className='text-lg md:text-2xl font-medium'>COMMUNITY FORMS</span>
            </button>
        </div>
        <div className='md:w-5/6 mx-auto px-2 md:px-0 py-16'>
            <GetinTouch/>
        </div>
        <div className="py-10 px-2 md:px-0 bg-[#190808]">
            <div className="md:w-5/6 mx-auto">
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default page