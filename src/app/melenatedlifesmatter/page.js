import Footer from '@/components/footer/Footer'
import GetinTouch from '@/components/getintouch/GetinTouch'
import Navbar from '@/components/navbar/Navbar'
import Navbar2 from '@/components/navbar2/Navbar2'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col gap-10 items-center'>
            <h1 className='text-2xl md:text-5xl md:w-1/2 text-center'>Connecting Communities, Empowering Change</h1>
            <div className='w-full flex justify-center'>
                <Image className='h-full w-5/6 md:w-4/6' width={1000} height={1000} src={"/change.png"}></Image>
            </div>
            <button className='bg-white rounded-2xl px-8 py-3 flex gap-2 justify-center items-center text-black font-bold text-sm md:text-2xl'>
                LETS CONNECT
                <div className='relative h-[15px] w-[20px] md:h-[20px] md:w-[30px]'>
                    <Image fill={true} src={"/rightarrowb.png"}></Image>
                </div>
            </button>
        </div>
        <div className='py-16 flex flex-col gap-8 md:w-4/6 mx-auto px-2 md:px-0'>
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between'>
                <div className='md:w-[40%] flex justify-center md:justify-start'>
                    <div className='relative h-[480px] w-[400px]'>
                        <Image fill={true} src={"/activism.png"}></Image>
                    </div>
                </div>
                <div className='md:w-[55%] flex flex-col gap-5 md:gap-10 items-center md:items-end'>
                    <h2 className='text-2xl md:text-5xl font-semibold'>Advocacy & Activism</h2>
                    <p className='text-center md:text-right text-sm w-2/3 leading-relaxed'> We organize protests, marches, and advocacy campaigns to demand an end to police brutality, mass incarceration, and racial disparities in healthcare, education, and housing.</p>
                    <div>
                        <button className='px-8 py-2 bg-white text-black rounded-md flex justify-center items-center text-xl font-semibold'>MORE INFO</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row-reverse justify-between'>
                <div className='md:w-[40%] flex justify-center md:justify-start'>
                    <div className='relative h-[480px] w-[400px]'>
                        <Image className='rounded-3xl' fill={true} src={"/commune.png"}></Image>
                    </div>
                </div>
                <div className='md:w-[55%] flex flex-col gap-5 md:gap-10 items-center md:items-end'>
                    <h2 className='text-2xl md:text-5xl font-semibold'>Community Engagement</h2>
                    <p className=' text-center md:text-right text-sm w-2/3 leading-relaxed'>We foster community dialogue, education, and empowerment through workshops, forums, and cultural events.</p>
                    <div>
                        <button className='px-8 py-2 bg-white text-black rounded-md flex justify-center items-center text-xl font-semibold'>MORE INFO</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center py-10'>
            <button className='flex justify-center items-center border-[1px] border-white rounded-md gap-2 md:gap-5 bg-gradient-to-b from-[#FF1111] to-[#692323] px-6 py-3 md:px-10 md:py-6'>
                <div className='relative h-[20px] w-[25px] md:h-[25px] md:w-[40px]'>
                    <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                </div>
                <span className='text-lg md:text-2xl font-medium'>COMMUNITY FORMS</span>
            </button>
        </div>
        <div className="w-full px-2 md:px-0 md:w-5/6 mx-auto">
          <div className="py-16">
            <GetinTouch/>
          </div>
          <div className="py-10">
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default page