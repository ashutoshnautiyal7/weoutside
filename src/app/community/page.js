import Footer from '@/components/footer/Footer'
import LeftSection from '@/components/leftsection/LeftSection'
import RightSection from '@/components/rightsection/RightSection'
import Topbar from '@/components/topbar/Topbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-gradient-to-b from-[#470a0a] via-black to-[#480203]'>
        <div className='w-full px-2 md:px-0 md:w-10/12 mx-auto'>
            <Topbar/>
            <div className='flex justify-between my-5'>
                <div className='w-full md:w-[65%]'>
                    <LeftSection/>
                </div>
            </div>
            <div className='py-5'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default page