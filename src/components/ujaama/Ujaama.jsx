import Image from 'next/image'
import React from 'react'

const Ujaama = () => {
  return (
    <div className='flex'>
        <div className='relative w-[50%] h-[500px]'>
          <Image fill={true} src={"/sign.png"}></Image>
        </div>
        <div className='w-1/2 flex flex-col text-right'>
          <h1 className='text-6xl font-semibold'>UJAMAA</h1>
          <h3 className='tracking-wider'>Economics Community</h3>
          <p className='text-sm w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .</p>
          <button>Join Us</button>
        </div>
    </div>
  )
}

export default Ujaama