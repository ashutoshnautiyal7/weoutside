import React from 'react'

const data=[
  {
    id:0,
    donation:"$25.00",
    to:"Sophie Brown",
    date:"March 19, 2024 12:04 PM",
    status:"Complete",
    tid:"DMSTSB0054"
  },
  {
    id:1,
    donation:"$25.00",
    to:"Sophie Brown",
    date:"March 19, 2024 12:04 PM",
    status:"Complete",
    tid:"DMSTSB0054"
  },
  {
    id:2,
    donation:"$25.00",
    to:"Sophie Brown",
    date:"March 19, 2024 12:04 PM",
    status:"Complete",
    tid:"DMSTSB0054"
  },
  {
    id:3,
    donation:"$25.00",
    to:"Sophie Brown",
    date:"March 19, 2024 12:04 PM",
    status:"Complete",
    tid:"DMSTSB0054"
  },
]

const page = () => {
  return (
    <div className='px-2 pt-2 pb-12 md:px-5 md:pt-5 md:pb-24'>
      <div className='py-2'>
        <h4 className='text-xs md:text-sm font-semibold'>4 Total Donations</h4>
      </div>
      <div className='border-[1px] border-white rounded-t-lg grid grid-cols-4 bg-[#1B1B1B] py-3 px-5 text-[10px] md:text-sm'>
        <span>DONATION</span>
        <span>TO</span>
        <span>DATE</span>
        <span>STATUS</span>
      </div>
        {
          data.map((d)=>(
            <div key={d.id} className='md:text-base text-[10px] flex flex-col border-b-[1px] border-l-[1px] border-r-[1px] border-white py-3 px-5'>
              <div className='grid grid-cols-4 pb-3'>
                <span>{d.donation}</span>
                <span>{d.to}</span>
                <span>{d.date}</span>
                <span>{d.status}</span>
              </div>
              <div className='py-1.5 md:py-2 text-[8px] md:text-sm flex justify-center rounded-full bg-[#1B1B1B]'>
                <span>Transaction ID: {d.tid}</span>
              </div>
            </div>
          ))
        }
      <div className='w-full border-b-[1px] border-l-[1px] border-r-[1px] border-white rounded-b-lg bg-[#1B1B1B] py-3 px-5 text-[10px] md:text-sm'>
        <h4 className=''>Showing 1-4 of 4 Donations</h4>
      </div>
    </div>
  )
}

export default page