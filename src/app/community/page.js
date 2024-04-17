import Footer from '@/components/footer/Footer'
import LeftSection from '@/components/leftsection/LeftSection'
import RightSection from '@/components/rightsection/RightSection'
import Topbar from '@/components/topbar/Topbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-gradient-to-b from-[#a43122] to-[#430102]'>
        <div className='w-10/12 mx-auto'>
            <Topbar/>
            <div className='flex justify-between my-5'>
                <div className='w-[65%]'>
                    <LeftSection/>
                </div>
                <div className='w-[25%]'>
                    <RightSection/>
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