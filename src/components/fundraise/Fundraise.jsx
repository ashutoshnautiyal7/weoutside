import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Fundraise = () => {
  return (
    <div className='flex flex-col gap-8 w-full mx-auto py-10'>
        <div className='w-full p-3 md:p-5 bg-gradient-to-l from-[#BD1616] via-[#000000] to-[#000000]'>
            <div className='flex gap-1 md:w-10/12 mx-auto'>
                <div className='w-1/2 flex flex-col gap-5 items-start'>
                    <h2 className='text-lg md:text-5xl font-medium md:tracking-wide md:leading-normal'>TRANSFORMING THE FUNDRAISING <span className='text-red-700'>!</span></h2>
                    <p className='text-xs md:text-lg md:tracking-wide w-5/6'>Empowering our cause through shared generosity, we&apos;re transforming fundraising into a beacon of collective impact.</p>
                    <Link href={"/community"}>
                        <button className='bg-[#D93737] text-xs md:text-xl font-medium py-2 md:py-4 px-2 md:px-8 rounded-lg flex justify-center items-center gap-1 md:gap-2'>LETS JOIN
                        <div className='relative h-[10px] w-[15px] md:h-[25px] md:w-[35px]'>
                            <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                        </div>
                        </button>
                    </Link>
                </div>
                <div className='z-10 w-1/2 flex justify-end'>
                    <div className='relative h-[250px] w-[250px] md:h-[500px] md:w-[500px]'>
                        <Image alt="image" fill={true} src={"/fundraise.png"}></Image>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full p-3 md:p-5 bg-gradient-to-r from-[#BD1616] via-[#000000] to-[#000000]'>
            <div className='flex gap-1 md:w-10/12 mx-auto'>
                <div className='w-1/2 flex'>
                    <div className='relative h-[250px] w-[250px] md:h-[500px] md:w-[500px]'>
                        <Image alt="image" fill={true} src={"/comm.png"}></Image>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-5 items-end'>
                    <h2 className='text-lg md:text-5xl font-medium md:tracking-wide md:leading-normal text-right'>FUNDRAISNG COMMUNITY <span className='text-red-700'>!</span></h2>
                    <p className='text-xs md:text-lg md:tracking-wide text-right w-4/6'>Every donation is a step toward realizing our shared vision of a brighter tomorrow.</p>
                    <Link href={"/community"}>
                        <button className='bg-[#D93737] text-xs md:text-xl font-medium py-2 md:py-4 px-2 md:px-8 rounded-lg flex justify-center items-center gap-1 md:gap-2'>
                        <div className='relative h-[10px] w-[15px] md:h-[25px] md:w-[35px]'>
                            <Image alt="image" fill={true} src={"/leftarrow.png"}></Image>
                        </div>
                        LETS CONNECT
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='w-full p-3 md:p-5 bg-gradient-to-l from-[#BD1616] via-[#000000] to-[#000000]'>
            <div className='flex gap-1 md:w-10/12 mx-auto'>
                <div className='w-1/2 flex flex-col gap-8 items-start justify-center'>
                    <div className='flex justify-center items-center gap-2 md:gap-8'>
                        <div className='h-[15px] w-[15px] md:h-[45px] md:w-[45px] rounded-full bg-gradient-to-b from-[#FE1212] to-[#841111]'></div>
                        <span className='text-sm md:text-3xl font-medium'>Project Showcase</span>
                    </div>
                    <div className='flex justify-center items-center gap-2 md:gap-8'>
                        <div className='h-[15px] w-[15px] md:h-[45px] md:w-[45px] rounded-full bg-gradient-to-b from-[#FE1212] to-[#841111]'></div>
                        <span className='text-sm md:text-3xl font-medium'>Community Stories</span>
                    </div>
                    <div className='flex justify-center items-center gap-2 md:gap-8'>
                        <div className='h-[15px] w-[15px] md:h-[45px] md:w-[45px] rounded-full bg-gradient-to-b from-[#FE1212] to-[#841111]'></div>
                        <span className='text-sm md:text-3xl font-medium'>Impact Reports</span>
                    </div>
                    <div className='flex justify-center items-center gap-2 md:gap-8'>
                        <div className='h-[15px] w-[15px] md:h-[45px] md:w-[45px] rounded-full bg-gradient-to-b from-[#FE1212] to-[#841111]'></div>
                        <span className='text-sm md:text-3xl font-medium'>Resources and Tools</span>
                    </div>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <div className='relative h-[250px] w-[250px] md:h-[500px] md:w-[500px]'>
                        <Image alt="image" fill={true} src={"/showcase.png"}></Image>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <Link href={"/community"} className='flex justify-center items-center border-[1px] border-white rounded-md gap-2 md:gap-5 bg-gradient-to-b from-[#FF1111] to-[#692323] px-6 py-3 md:px-10 md:py-6'>
                <div className='relative h-[20px] w-[25px] md:h-[25px] md:w-[40px]'>
                    <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                </div>
                <span className='text-lg md:text-2xl font-medium'>COMMUNITY FORMS</span>
            </Link>
        </div>
    </div>
  )
}

export default Fundraise