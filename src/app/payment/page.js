import Footer from '@/components/footer/Footer'
import Navbar2 from '@/components/navbar2/Navbar2'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar2/>
        <div className='flex flex-col w-full md:w-5/6 justify-center mx-auto items-center'>
          <h3 className='text-3xl md:text-5xl font-medium text-center py-2'>Choose Payment</h3>
          <div className='flex flex-wrap gap-3 py-1 md:py-5'>
            <div className='flex py-2 md:py-10 gap-2'>
              <button className='bg-white text-black border-[2px] border-red-700 px-3 md:px-12 py-1 md:py-5 rounded-xl'>
                <span className='text-sm md:text-4xl font-semibold'>$50</span>
              </button>
              <button className='bg-white text-black border-[2px] border-red-700 px-3 md:px-12 py-1 md:py-5 rounded-xl'>
                <span className='text-sm md:text-4xl font-semibold'>$100</span>
              </button>
              <button className='bg-gradient-to-b from-[#FF1111] to-[#692323] text-white border-[2px] border-white px-3 md:px-12 py-1 md:py-5 rounded-xl'>
                <span className='text-sm md:text-4xl font-semibold'>$500</span>
              </button>
            </div>
            <button className='flex text-sm md:text-4xl font-semibold items-center'>
              <div className='bg-white text-black border-[2px] rounded-l-xl border-red-700 px-2 md:px-8 py-2 md:py-5 font-normal'>
                USD
              </div>
              <div className='bg-white text-black border-[2px] rounded-r-xl border-red-700 px-4 md:px-12 py-2 md:py-5'>
                <span>$Other</span>            
              </div>
            </button>
          </div>
        </div>
        <div className='flex flex-col w-full md:w-5/6 items-center mx-auto gap-5 py-5'>
          <h2 className='text-3xl md:text-5xl font-medium text-center'>Your Information</h2>
          <form className='flex flex-col gap-5 text-white px-2 md:px-0 w-full md:w-5/6 md:py-5'>
            <div className='flex justify-between'>
              <div className='w-[48%] text-black'>
                <h4 className='text-lg md:text-2xl text-white'>First Name*</h4>
                <input className='bg-white w-full h-10 md:h-12 rounded-md outline-none px-2 text-xl'></input>
              </div>
              <div className='w-[48%] text-black'>
                <h4 className='text-lg md:text-2xl text-white'>Last Name*</h4>
                <input className='bg-white w-full h-10 md:h-12 rounded-md outline-none px-2 text-xl'></input>
              </div>
            </div>
            <div className='text-black'>
              <h4 className='text-lg md:text-2xl text-white'>Email*</h4>
              <input type='email' className='bg-white w-full h-10 md:h-12 rounded-md outline-none px-2 text-xl'></input>
              <p className='text-xs text-white pt-1'>Your receipt will be emailed here.</p>
            </div>
            <div className='text-black'>
              <h4 className='text-lg md:text-2xl text-white'>Contact Number*</h4>
              <input className='bg-white w-full h-10 md:h-12 rounded-md outline-none px-2 text-xl'></input>
            </div>
            <div className='text-black'>
              <h4 className='text-lg md:text-2xl text-white'>Your Suggestions*</h4>
              <textarea rows={5} className='bg-white w-full rounded-md outline-none px-2 py-2 text-xl'></textarea>
            </div>
            <div className='flex justify-center items-center'>
              <button className='bg-gradient-to-r from-[#1F91E4] to-[#0F97F9] rounded-md w-3/12 py-2 md:py-3 text-base md:text-xl font-semibold'>SUBMIT</button>
            </div>
          </form>
        </div>
        <div className='md:w-5/6 mx-auto py-5'>
          <div className='flex flex-col justify-center items-center gap-10 py-5 w-5/6 mx-auto'>
            <div className='flex items-center gap-1'>
              <div className='relative h-[15px] w-[15px]'>
                <Image fill={true} src={"/tick.png"}></Image>
              </div>
              <h4 className='text-2xl md:text-5xl font-semibold'>Payment Method</h4>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-8'>
              <div className='bg-white px-14 py-3 rounded-md flex justify-center items-center'>
                <div className='relative h-[25px] w-[90px] md:h-[45px] md:w-[160px]'>
                  <Image fill={true} src={"/paypal.png"}></Image>
                </div>
              </div>
              <div className='bg-white px-14 py-3 rounded-md'>
                <div className='relative h-[25px] w-[90px] md:h-[45px] md:w-[160px] flex justify-center items-center'>
                  <Image fill={true} src={"/visa.png"}></Image>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center gap-1'>
              <input className='h-[20px] w-[20px] md:h-[30px] md:w-[30px]' type='checkbox'></input>
              <h5 className='text-xs md:text-2xl md:text-left'>I’d like to payment to the community</h5>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <button className='bg-gradient-to-b from-[#FF1111] to-[#692323] md:text-2xl px-5 py-2 rounded-lg'>Support Now</button>
              <h4 className='text-2xl md:text-4xl font-semibold'>$500.00</h4>
            </div>
          </div>
        </div>
        <div className='px-2 md:px-0 md:w-5/6 mx-auto py-8'>
          <Footer/>
        </div>
    </div>
  )
}

export default page