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
        title:"LEGAL CONSULTATIONS",
        desc:"Our experienced legal professionals provide confidential consultations to individuals facing legal issues. "
    },
    {
        id:1,
        icon:"/rightrefer.png",
        title:"RIGHT REFERRALS",
        desc:"In cases where specialized legal expertise is needed, we connect community members with trusted legal resources ."
    },
    {
        id:2,
        icon:"/financialaid.png",
        title:"LEGAL ADVOCACY",
        desc:"We advocate for systemic change and policy reforms to address systemic injustices and barriers to justice within our community."
    },
];

const page = () => {
  return (
    <div>
        <Navbar2/>
        <div className='flex flex-col md:flex-row py-16'>
            <div className='md:w-1/2 flex justify-end p-5'>
                <div className='md:w-8/12 h-full'>
                    <div className='flex flex-col gap-2 justify-between items-center md:items-start h-5/6'>
                        <h1 className='text-lg md:text-4xl font-semibold md:leading-snug text-center md:text-left'>WE EMPOWERING LEGAL SUPPORT FOR OUR COMMUNITY <span className='text-red-600'>!</span></h1>
                        <button className='w-7/12 bg-[#D32626] flex justify-center items-center gap-2 text-xs md:text-2xl md:rounded-tr-full font-medium p-2'>
                            LETS CONNECT
                            <div className='relative h-[15px] w-[20px] md:h-[20px] md:w-[30px]'>
                                <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2'>
                <div className='md:h-full rounded-[71px] md:w-[550px] md:bg-[#99C2EB]'>
                    <div className='relative -top-1.5 h-[200px] w-11/12 mx-auto md:mx-0 md:h-[375px] md:w-[543px]'>
                        <Image alt="image" src={"/legalsup.png"} fill={true}></Image>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 className='text-4xl md:text-6xl font-semibold text-center md:py-8 shadow-white text-shadow-rg text-[#FF2626]'>WE PROVIDE LEGAL SUPPORT</h1>
            <div className='flex flex-wrap items-center justify-center gap-10 md:gap-14 mx-auto w-11/12 md:w-8/12 py-8 md:py-16'>
                {
                    data.map((d)=>(
                        <Card4 key={d.id} data={d}/>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-wrap-reverse justify-between py-16 px-2 md:px-0 md:w-4/6 mx-auto'>
            <div className='md:w-[50%] flex flex-col gap-5 justify-end'>
                <h1 className='text-2xl md:text-5xl font-medium text-center md:text-left'>How We Can Help ?</h1>
                <p className='text-sm md:text-xl md:tracking-wider md:leading-normal text-center md:text-left'>Whether you&apos;re facing a legal issue, seeking information about your rights, or looking to get involved in advocacy efforts, We Outside Community is here to support you. Our legal support program aims to empower individuals, promote justice, and build a more resilient and equitable community for all.</p>
            </div>
            <div className='w-full py-2 md:w-[45%] flex justify-center md:justify-start'>
                <div className='bg-white h-[180px] w-[180px] md:h-[450px] md:w-[450px] rounded-tl-full'>
                    <div className='relative -top-4 -left-4 h-[190px] w-[190px] md:h-[450px] md:w-[450px]'>
                        <Image alt="image" fill={true} src={"/woman2.png"}></Image>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='flex justify-center items-center border-[1px] border-white rounded-md gap-2 md:gap-5 bg-gradient-to-b from-[#FF1111] to-[#692323] px-6 py-3 md:px-10 md:py-6'>
                <div className='relative h-[20px] w-[25px] md:h-[25px] md:w-[40px]'>
                    <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                </div>
                <span className='text-lg md:text-2xl font-medium'>COMMUNITY FORMS</span>
            </button>
        </div>
        <div className='md:w-5/6 mx-auto px-2 md:px-0 py-16'>
            <GetinTouch/>
        </div>
        <div className="md:w-5/6 pb-16 px-2 md:px-0 mx-auto">
            <Footer/>
        </div>
    </div>
  )
}

export default page