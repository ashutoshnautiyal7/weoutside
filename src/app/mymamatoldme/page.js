import Footer from '@/components/footer/Footer'
import GetinTouch from '@/components/getintouch/GetinTouch'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='py-10 flex justify-center'>
            <Image className='w-3/6 ' width={1000} height={1000} src={"/mymama.png"}></Image>
        </div>
        <div className='md:w-4/6 px-2 md:px-0 mx-auto text-center text-sm md:text-xl'>
            <p>Welcome to our video series dedicated to empowering the Black community through informed political engagement. Our mission is to provide informative content on political candidates and issues, equipping viewers with the knowledge and resources they need to make a difference in their communities.</p>
        </div>
        <div className='py-16 md:w-5/6 mx-auto md:px-0 px-2 overflow-hidden'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        <div className='relative h-[200px] w-[350px] md:h-[250px] md:w-[400px]'>
                            <Image fill={true} src={"/modelz.png"}></Image>
                        </div>
                    </div>
                    <h4 className='text-center text-2xl md:text-4xl font-semibold'>Usher</h4>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        <div className='relative h-[200px] w-[350px] md:h-[250px] md:w-[400px]'>
                            <Image fill={true} src={"/modelz.png"}></Image>
                        </div>
                    </div>
                    <h4 className='text-center text-2xl md:text-4xl font-semibold'>James Brown</h4>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        <div className='relative h-[200px] w-[350px] md:h-[250px] md:w-[400px]'>
                            <Image fill={true} src={"/modelz.png"}></Image>
                        </div>
                    </div>
                    <h4 className='text-center text-2xl md:text-4xl font-semibold'>Beyoncé</h4>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        <div className='relative h-[200px] w-[350px] md:h-[250px] md:w-[400px]'>
                            <Image fill={true} src={"/modelz.png"}></Image>
                        </div>
                    </div>
                    <h4 className='text-center text-2xl md:text-4xl font-semibold'>Aretha Franklin</h4>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        <div className='relative h-[200px] w-[350px] md:h-[250px] md:w-[400px]'>
                            <Image fill={true} src={"/modelz.png"}></Image>
                        </div>
                    </div>
                    <h4 className='text-center text-2xl md:text-4xl font-semibold'>Marvin Gaye</h4>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        <div className='relative h-[200px] w-[350px] md:h-[250px] md:w-[400px]'>
                            <Image fill={true} src={"/modelz.png"}></Image>
                        </div>
                    </div>
                    <h4 className='text-center text-2xl md:text-4xl font-semibold'>Whitney Houston</h4>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-8 md:w-5/6 mx-auto px-2 md:px-0 overflow-hidden'>
            <div className='text-center md:w-7/12 flex flex-col gap-8'>
                <div  className='text-4xl md:text-6xl font-semibold flex flex-col gap-2'>
                    <h2>Mama's</h2>
                    <h2>Words of Wisdom</h2>
                </div>
                <div className='md:text-lg'>
                    <p>Share inspirational quotes, sayings,</p>
                    <p> or proverbs that have been passed down through generations.</p>
                </div>
            </div>
            <div className='relative h-[180px] w-[360px] md:h-[400px] md:w-[800px]'>
                <Image fill={true} src={"/wisdom.png"}></Image>
            </div>
        </div>
        <div className='flex justify-center pt-12 md:pt-24'>
            <Link href={"/community"} className='flex justify-center items-center border-[1px] border-white rounded-md gap-2 md:gap-5 bg-gradient-to-b from-[#FF1111] to-[#692323] px-6 py-3 md:px-10 md:py-6'>
                <div className='relative h-[20px] w-[25px] md:h-[25px] md:w-[40px]'>
                    <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                </div>
                <span className='text-lg md:text-2xl font-medium'>COMMUNITY FORMS</span>
            </Link>
        </div>
        <div className="w-full px-2 md:px-0 ">
          <div className="py-16 md:w-5/6 mx-auto">
            <GetinTouch/>
          </div>
          <div className="py-10 bg-[#190808]">
            <div className='md:w-5/6 mx-auto'>
                <Footer/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page