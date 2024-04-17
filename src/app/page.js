import GetinTouch from "@/components/getintouch/GetinTouch";
import Navbar from "../components/navbar/Navbar";
import Joinus from "@/components/joinus/Joinus";
import Mid from "@/components/mid/Mid";
import Support from "@/components/support/Support";
import Ujaama from "@/components/ujaama/Ujaama";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#182023] to-[#0B1016]">
        <Navbar/>
        <Joinus/>
      </div>
      <div className="bg-[#0D1218]">
        <Mid/>
        <Ujaama/>
        <Support/>
        <div className="w-full px-2 md:px-0 md:w-5/6 pt-10 mx-auto">
          <div className="py-16">
            <GetinTouch/>
          </div>
          <div className="py-10">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}
