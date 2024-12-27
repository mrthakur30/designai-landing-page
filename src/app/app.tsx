
import Form from "../components/Form"
import Header from "../components/Header"
import { BiHome } from "react-icons/bi";
import { MdRoomPreferences, } from "react-icons/md";
import { GrHomeOption } from "react-icons/gr";
import BeforeAfterSlider from "components/BeforeAfterSlider";
import Footer from "components/Footer";
import { useState } from "react";
import Slider from "components/Slider";
import TestimonialCard from "components/ReviewCad";
import FAQSection from "components/FAQ";

const Main = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="w-full min-h-screen bg-green-4 ">
      <Header onClick={() => setShowForm(true)} />
      {showForm && (
        <div className=" z-40 w-screen fixed  h-screen">
          <Form />
        </div>
      )}
     
      <div className="md:h-[80%] main flex flex-col  md:pl-36 md:pt-44 pt-20">
      <img src="/bg.webp" className="md:hidden w-44 mx-auto" alt="" />
        
        <img src="/bg.webp" className="hidden h-96 hover:-translate-y-8 transition-all md:block absolute right-36 top-44" alt="" />
        <div className=" px-8 md:px-0 flex flex-col md:gap-16 gap-8 ">
          <div className=" flex  md:justify-start md:items-center">
            <p className=" font-semibold md:text-4xl text-xl rounded-3xl bg-gradient-to-r text-black from-green-1 px-5 py-2 to-transparent">Used by over 2 million people to redesign homes</p>
          </div>
          <span className=" text-4xl md:text-6xl font-bold ">
            Your personal <br /> <span className="text-green-2"> AI</span>  interior designer
          </span>
          <button
            onClick={() => setShowForm(true)}
            className="flex text-3xl  md:w-44 shadow-md  shadow-green-2 rounded-3xl justify-center items-center  bg-green-2 text-white first-line:md:px-4 px-4 py-2 font-semibold">
            <span>
              Get Free
            </span>
          </button>
        </div>
      </div>
      {/* Features */}
      {/* <div className="py-10">
         <h1 className="text-xl md:text-5xl font-semibold px-10 text-zinc-800">Features and Benefits</h1>
         <Slider images={data} />
      </div> */}

      <div className="py-20 w-full md:pl-36 pl-8 pr-10 flex flex-col gap-8 justify-start">
        <h1 className="text-3xl md:text-4xl font-bold text-left">Design <span className="text-green-2"> AI</span> <br className="md:hidden" /> Features</h1>
        <p className="text-gray-400 md:text-xl font-semibold">Enhance your image's resolution and achieve crisp, <br /> clear quality with a single click.</p>
        <button onClick={() => setShowForm(true)}
          className="flex rounded-3xl md:text-2xl text-lg justify-center w-36 items-center text-green-3 bg-green-1 px-2 py-2 font-bold">
          Try Now
        </button>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full transition-all hover:shadow-green-1 bg-gray-100 shadow-md bg-opacity-30 p-6 b rounded-2xl">
            <BiHome color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5"> Design Interior</h1>
            <p className="md:text-lg font-semibold mt-2 text-gray-400">Variety of settings to generate perfect interior for your needs.</p>
          </div>
          <div className="w-full transition-all hover:shadow-green-1 bg-gray-100 shadow-md bg-opacity-30  p-6  rounded-2xl">
            <MdRoomPreferences color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">   Transform your existing room</h1>
            <p className="md:text-lg font-semibold mt-2 text-gray-400">
              Upload an image of your room and our AI will restyle it with your chosen design preferences.
            </p>
          </div>
          <div className="w-full transition-all hover:shadow-green-1 bg-gray-100 shadow-md bg-opacity-30 p-6  rounded-2xl">
            <GrHomeOption color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5"> Manage room type</h1>
            <p className="md:text-lg font-semibold mt-2 text-gray-400">
              No matter what type of room you're designing, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Types */}

      <div className="flex flex-col  ">
        <span className="text-3xl  md:text-5xl text-center my-5 font-bold ">
          Rooms that  <span className="text-green-2"> DesignAI</span>   created
        </span>
        <Slider />
      </div>

      <div className="py-10 w-full p-4 md:px-8 flex flex-col  gap-3 justify-center items-center">
        <span className="text-3xl md:text-5xl md:text-center font-bold text-left">Check Examples of <span className="text-green-2">DesignAI</span> </span>

        <div className="md:w-9/12 w-full flex flex-col  ">
          <div className="w-full ">
            <BeforeAfterSlider
              afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fundefined_Why-You-Should-Never-Leave-a-Room-Empty-When-Your-Homes-For-Sale.jpg?alt=media&token=c0ba2860-0ddf-4202-ab98-5efece86a636"}
              beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_a9f8c07d-3e88-4c22-94ad-232750f8b1d1.jpg?alt=media&token=e5ab2086-c607-4c56-b490-35c043fd4628"}
            />
          </div>

          <div className="w-full ">
            <BeforeAfterSlider
              afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_203d4958-42a3-464e-9948-ec59f53809b9.jpg?alt=media&token=7f7fde8c-7f2c-4035-9641-6fca375c0222"}
              beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fundefined_a14742c13879f731cd4756430a3beffa.jpg?alt=media&token=dd229eb7-43c6-4b38-b554-79c762f31a8d"}
            />
          </div>

          <div className="w-full ">
            <BeforeAfterSlider
              beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_737e3b8c-649a-473f-a6af-71a43a496d1e.jpg?alt=media&token=bed6011d-9631-4cd3-bf19-b4b5fb80f7f4"}
              afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fundefined_premium_photo-1661766077694-6e3750b0fb97.jpeg?alt=media&token=b02162d9-4cf4-43f2-9a61-0588f54e8b19"}
             />
          </div>
        </div>
      </div>

      <div className="py-10 w-full  flex flex-col gap-8 justify-center items-center md:justify-start">
        <h1 className="text-3xl md:text-5xl  font-bold text-left">Loved by many  <span className="text-green-2">Worldwide</span></h1>
        <div className="w-10/12">
            <TestimonialCard />
        </div>
      </div>

      {/* FAQ */}
      <FAQSection />
      <Footer />
    </main>
  )
}

export default Main
