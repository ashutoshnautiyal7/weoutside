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
      <Navbar/>
      <Joinus/>
      <Mid/>
      <Ujaama/>
      <Support/>
      <GetinTouch/>
      <Footer/>
    </>
  );
}
