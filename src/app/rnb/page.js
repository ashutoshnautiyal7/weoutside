import Navbar3 from '@/components/navbar3/Navbar3'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="bg-[url('/rndb.png')] bg-cover">
        <Navbar3/>
        <div className='w-5/6 mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-5 w-[30%]'>
              <div className='relative h-[300px] w-[300px]'>
                <Image alt="image" fill={true} src={"/rnbmusic.png"}></Image>
              </div>
              <p className='leading-relaxed'>Welcome to our platform dedicated to the revival of R&B music and its profound impact on cultural identity and community cohesion. Join us on a journey to rediscover the soulful rhythms and heartfelt lyrics that once served as the heartbeat of our neighborhoods.</p>
              <div className='w-1/2'>
                <button className='w-full bg-[#FF0000] py-2 border-[1px] border-white text-xl font-semibold'>SUPPORT US</button>
              </div>
            </div>
            <div className='w-[45%]'>
              <div className='relative h-[500px] w-[500px]'>
                <Image alt="image" fill={true} src={"/rnbheart.png"}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page