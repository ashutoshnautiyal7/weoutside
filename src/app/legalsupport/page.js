import Card4 from '@/components/card4/Card4';
import Footer from '@/components/footer/Footer';
import GetinTouch from '@/components/getintouch/GetinTouch';
import Navbar2 from '@/components/navbar2/Navbar2'
import Image from 'next/image'
import React from 'react'

const data=[
    {
        id:0,
        icon:"/legalhelp.png",
        title:"LEGAL HELP",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:1,
        icon:"/rightrefer.png",
        title:"RIGHT REFER",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:2,
        icon:"/financialaid.png",
        title:"FINANCIAL AID",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
];

const page = () => {
  return (
    <div>
        <Navbar2/>
        <div className='flex py-16'>
            <div className='w-1/2 flex justify-end p-5'>
                <div className='w-8/12 h-full'>
                    <div className='flex flex-col justify-between h-5/6'>
                        <h1 className='text-4xl font-semibold'>WE EMPORING LEGAL SUPPORT FOR OUR COMMUNITY !</h1>
                        <button className='w-5/12 bg-[#D32626] rounded-lg p-2'>LETS CONNECT</button>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='h-full rounded-[71px] w-[565px] bg-red-600'>
                    <div className='relative h-[375px] w-[543px]'>
                        <Image src={"/legalsup.png"} fill={true}></Image>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 className='text-5xl font-semibold text-center my-8 '>WE PROVIDE LEGAL SUPPORT</h1>
            <div className='flex flex-wrap items-center justify-center gap-14 mx-auto w-6/12'>
                {
                    data.map((d)=>(
                        <Card4 key={d.id} data={d}/>
                    ))
                }
            </div>
        </div>
        <div className='flex items-center py-16'>
            <div className='w-1/2 flex justify-center'>
                <div className='flex flex-col gap-5 items-center w-6/12'>
                    <h2 className='text-center text-5xl font-medium'>WE OUTSIDE ARRANGE XYZ</h2>
                    <p className='text-lg text-center tracking-wide w-5/6 flex'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='relative h-[600px] w-[450px]'>
                    <Image fill={true} src={"/woman.png"}></Image>
                </div>
            </div>
        </div>
        <div className='py-5 flex justify-center'>
                <div className='p-[1px] rounded-lg bg-white'>
                    <button className='rounded-lg bg-gradient-to-b from-[#FF1111] to-[#692323] p-5 flex items-center justify-center gap-2'><Image width={20} height={10} src={"/rightarrow.png"}></Image><span className='text-sm font-medium'>COMMUNITY FORMS</span></button>
                </div>
        </div>
        <GetinTouch/>
        <div className="px-16 py-16">
            <Footer/>
        </div>
    </div>
  )
}

export default page