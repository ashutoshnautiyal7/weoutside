import Footer from '@/components/footer/Footer';
import Fundraise from '@/components/fundraise/Fundraise';
import GetinTouch from '@/components/getintouch/GetinTouch';
import Navbar2 from '@/components/navbar2/Navbar2'
import React from 'react'

const data=[
    {
        id:0,
        title:"TRANSFORMING THE FUNDRAISING !",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        button:"LETS JOIN",
        img:"/fundraise.png",
    },
    {
        id:1,
        title:"FUNDRAISING OUR COMMUNITY !",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        button:"LETS CONNECT",
        img:"/fundraise.png",
    },
    {
        id:2,
        title:"TRANSFORMING THE FUNDRAISING",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        button:"LETS JOIN",
        img:"/fundraise.png",
    },

];
const page = () => {
  return (
    <div>
        <Navbar2/>
        <Fundraise data={data}/>
        <GetinTouch/>
        <div className="px-16 py-16">
            <Footer/>
        </div>
    </div>
  )
}

export default page