import Link from 'next/link'
import Footer from '../../components/footer/Footer'
import GetinTouch from '../../components/getintouch/GetinTouch'
import Navbar from '../../components/navbar/Navbar'
import Image from 'next/image'



const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col gap-1 text-center'>
          <h4 className='text-lg md:text-2xl'>Investing with Purpose</h4>
          <h1 className='text-5xl md:text-7xl font-bold'>UJAMAA</h1>
          <h3 className='text-lg md:text-2xl pt-5'>Real Estate Model</h3>
        </div>
        <div className='flex flex-col gap-24 py-10 px-2 md:px-0'>
          <div className='md:w-5/6 mx-auto flex flex-col-reverse gap-4 md:gap-0 md:flex-row items-center justify-between'>
            <div className='flex flex-col text-xl gap-8 md:w-[55%]'>
              <h4 className='md:w-5/6 text-center md:text-left'>At We outside, we take pride in our vibrant and diverse community. Rooted in the principles of unity, collaboration, and self-determination, we actively support and promote Ujaama, a concept deeply rooted in African culture that emphasizes cooperative economics and community building.</h4>
              <div className='flex justify-center md:justify-start'>
                <Link href={"https://buy.stripe.com/test_fZe9BF78V0kFbRe4gg"} className='bg-[#D93737] w-1/2 py-3 flex gap-2 justify-center items-center rounded-xl'>
                  LETS JOIN
                  <Image className='h-[20px] w-[30px]' width={1000} height={1000} src={"/rightarrow.png"}></Image>
                </Link>
              </div>
            </div>
            <div className='flex justify-center md:w-[40%]'>
              <div className='relative h-[300px] w-[150px] md:h-[450px] md:w-[200px]'>
                <Image fill={true} src={"/ujama.png"}></Image>
              </div>
            </div>
          </div>
          <div className='md:w-5/6 mx-auto gap-4 md:gap-0 flex flex-col-reverse md:flex-row-reverse justify-between'>
            <div className='flex flex-col items-center md:items-start text-xl gap-4 md:w-[40%]'>
              <h2 className='md:w-5/6 text-4xl md:text-6xl font-bold text-center md:text-right leading-tight'>Cooperative Ownership</h2>
              <h4 className='w-5/6 text-base text-center md:text-right'>We operate on a cooperative ownership model where investors pool resources to acquire and own properties collectively.Each investor has a stake in decision-making and benefits from shared resources and risks.</h4>
            </div>
            <div className='flex justify-center md:justify-start items-start md:w-[40%]'>
              <div className='relative h-[300px] w-[300px] md:h-[450px] md:w-[450px]'>
                <Image fill={true} src={"/coopow.png"}></Image>
              </div>
            </div>
          </div>
          <div className='md:w-5/6 mx-auto flex gap-4 md:gap-0 flex-col-reverse md:flex-row justify-between'>
            <div className='flex flex-col items-center md:items-start text-xl gap-4 md:w-[50%]'>
              <h2 className='md:w-5/6 text-4xl md:text-6xl font-bold text-center md:text-left leading-tight'>Community Developement Focus</h2>
              <h4 className='w-5/6 text-base text-center md:text-left'>Strong communities are built on a foundation of social cohesion and mutual support. Through social gatherings, community events, and networking opportunities, we cultivate meaningful connections and relationships that enrich the fabric of our community.</h4>
            </div>
            <div className='flex justify-center md:justify-start md:w-[40%]'>
              <div className='relative h-[300px] w-[300px] md:h-[450px] md:w-[450px]'>
                <Image fill={true} src={"/coop.png"}></Image>
              </div>
            </div>
          </div>
          <div className='md:w-5/6 mx-auto gap-4 md:gap-0 flex flex-col-reverse md:flex-row-reverse justify-between'>
            <div className='flex flex-col items-center md:items-start text-xl gap-4 md:w-[40%]'>
              <h2 className='md:w-5/6 text-4xl md:text-6xl font-bold text-center md:text-right leading-tight'>Profit-Sharing and Wealth Redistribution</h2>
              <h4 className='w-5/6 text-base text-center md:text-right'>We believe in sharing the success. A portion of rental income or property appreciation is reinvested back into the community. This ensures economic equality and fosters sustainable growth within the community</h4>
            </div>
            <div className='flex justify-center md:justify-start items-start md:w-[40%]'>
              <div className='relative h-[300px] w-[300px] md:h-[450px] md:w-[450px]'>
                <Image fill={true} src={"/educational_init.png"}></Image>
              </div>
            </div>
          </div>
          <div className='md:w-5/6 mx-auto flex gap-4 md:gap-0 flex-col-reverse md:flex-row justify-between'>
            <div className='flex flex-col items-center md:items-start text-xl gap-4 md:w-[50%]'>
              <h2 className='md:w-5/6 text-4xl md:text-6xl font-bold text-center md:text-left leading-tight'>Education and Skills Development</h2>
              <h4 className='w-5/6 text-base text-center md:text-left'>We invest in the people as much as the properties. Our programs focus on financial literacy, vocational training, and mentorship.By empowering individuals, we create a pipeline of informed investors and skilled community members</h4>
            </div>
            <div className='flex justify-center md:justify-start md:w-[40%]'>
              <div className='relative h-[300px] w-[300px] md:h-[450px] md:w-[450px]'>
                <Image fill={true} src={"/nerd.png"}></Image>
              </div>
            </div>
          </div>
          <div className='md:w-5/6 mx-auto gap-4 md:gap-0 flex flex-col-reverse md:flex-row-reverse justify-between'>
            <div className='flex flex-col items-center md:items-start text-xl gap-4 md:w-[40%]'>
              <h2 className='md:w-5/6 text-4xl md:text-6xl font-bold text-center md:text-right leading-tight'>Sustainable and Affordable Housing</h2>
              <h4 className='w-5/6 text-base text-center md:text-right'>We're committed to building sustainable and affordable housing options.From renovating existing properties to constructing energy-efficient homes, our goal is to address housing affordability while promoting environmental sustainability.</h4>
            </div>
            <div className='flex justify-center md:justify-start items-start md:w-[40%]'>
              <div className='relative h-[300px] w-[300px] md:h-[450px] md:w-[450px]'>
                <Image fill={true} src={"/sust.png"}></Image>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image className='w-screen h-full' width={4000} height={4000} src={"/ujamacard.png"}></Image>
        </div>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:w-7/12 md:px-0 px-2 mx-auto py-24'>
          <div className='bg-white px-8 py-16 text-black rounded-2xl'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-3 items-center'>
                <h2 className='text-4xl font-semibold'>Gold</h2>
                <h2 className='text-4xl font-semibold'>$12/Month</h2>
                <Link href={"https://buy.stripe.com/test_fZe9BF78V0kFbRe4gg"} className='bg-gradient-to-b from-[#8F1313] to-[#FF0101] px-8 py-1 text-xl font-semibold rounded-full text-white'>SUBSCRIBE NOW</Link>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                  <div className='bg-gradient-to-b from-[#FF0000] to-[#712727] p-3 rounded-full'></div>
                  <p>Lorem epsum decoder myincdsjncc</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='bg-gradient-to-b from-[#FF0000] to-[#712727] p-3 rounded-full'></div>
                  <p>Lorem epsum decoder myincdsjncc</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='bg-gradient-to-b from-[#FF0000] to-[#712727] p-3 rounded-full'></div>
                  <p>Lorem epsum decoder myincdsjncc</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='bg-gradient-to-b from-[#FF0000] to-[#712727] p-3 rounded-full'></div>
                  <p>Lorem epsum decoder myincdsjncc</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white px-8 py-16 text-black rounded-2xl'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-3 items-center'>
                <h2 className='text-4xl font-semibold'>Platinum</h2>
                <h2 className='text-4xl font-semibold'>$18/Month</h2>
                <Link href={"https://buy.stripe.com/test_bIYeVZbpb1oJ9J65kl"} className='bg-gradient-to-b from-[#FFC642] to-[#FF7B01] px-8 py-1 text-xl font-semibold rounded-full text-white'>SUBSCRIBE NOW</Link>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                  <div className='bg-[#FF9215] p-3 rounded-full'></div>
                  <p>Lorem epsum decoder myincdsjncc</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='bg-[#FF9215] p-3 rounded-full'></div>
                  <p>Lorem epsum decoder myincdsjncc</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='bg-[#FF9215] p-3 rounded-full'></div>
                  <p>Lorem epsum decoder myincdsjncc</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='bg-[#FF9215] p-3 rounded-full'></div>
                  <p>Lorem epsum decoder myincdsjncc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:w-5/6 mx-auto px-2 md:px-0 gap-10'>
          <h1 className='text-4xl md:text-6xl text-center font-semibold leading-snug'>JOIN OUR COMMUNITY TO GET MEMBERSHIP CARD</h1>
          <div className='flex justify-center'>
              <button className='flex justify-center items-center border-[1px] border-white rounded-md gap-2 md:gap-5 bg-gradient-to-b from-[#FF1111] to-[#692323] px-6 py-3 md:px-10 md:py-6'>
                  <div className='relative h-[20px] w-[25px] md:h-[30px] md:w-[40px]'>
                      <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                  </div>
                  <span className='text-lg md:text-2xl font-medium'>SUBSCRIBE</span>
              </button>
          </div>
        </div>
        <div className="w-full md:px-0 pt-10">
          <div className=" px-2 py-16 md:w-5/6 mx-auto">
            <GetinTouch/>
          </div>
          <div className="px-2 py-10 bg-[#190808]">
            <div className='md:w-5/6 mx-auto'>
              <Footer/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page