'use client'

import Footer from '@/components/footer/Footer';
import Fundraise from '@/components/fundraise/Fundraise';
import GetinTouch from '@/components/getintouch/GetinTouch';
import Navbar from '@/components/navbar/Navbar';
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Fundraise/>
        <div className="w-full px-2 md:px-0 md:w-5/6 py-10 mx-auto">
          <div className="py-5">
            <GetinTouch/>
          </div>
        </div>
        <div className="py-10 bg-[#190808]">
            <div className='w-full px-2 md:px-0 md:w-5/6 pt-10 mx-auto'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default page