
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

      <div className="md:h-[80%] main flex flex-col  md:pl-56 pt-44 ">
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

      <div className="py-20 w-full md:pl-56 pl-8 pr-10 flex flex-col gap-8 justify-start">
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
              beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fyashsharma2493%40gmail.com_WhatsApp%20Image%202024-01-19%20at%2018.59.46.jpeg?alt=media&token=2fe42869-f2d2-44e9-9493-4e4429dc80de"}
              afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_46b7a19d-31dc-4012-a84d-fd2170f11a1e.jpg?alt=media&token=fbf8ab01-b76b-4ce1-8059-f327f4cbe95d"}
            />
          </div>

          <div className="md:flex gap-5  ">
            <div className="md:w-1/2">
              <BeforeAfterSlider
                beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fyashsharma2493%40gmail.com_WhatsApp%20Image%202024-01-19%20at%2018.59.46.jpeg?alt=media&token=2fe42869-f2d2-44e9-9493-4e4429dc80de"}
                afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_46b7a19d-31dc-4012-a84d-fd2170f11a1e.jpg?alt=media&token=fbf8ab01-b76b-4ce1-8059-f327f4cbe95d"}
              />
            </div>

            <div className="md:w-1/2">
              <BeforeAfterSlider
                beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fyashsharma2493%40gmail.com_WhatsApp%20Image%202024-01-19%20at%2018.59.46.jpeg?alt=media&token=2fe42869-f2d2-44e9-9493-4e4429dc80de"}
                afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_46b7a19d-31dc-4012-a84d-fd2170f11a1e.jpg?alt=media&token=fbf8ab01-b76b-4ce1-8059-f327f4cbe95d"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 w-full  flex flex-col gap-8 justify-center items-center md:justify-start">
        <h1 className="text-3xl md:text-5xl  font-bold text-left">Loved by many  <span className="text-green-2">Worldwide</span></h1>
        <div className="grid grid-cols-1 w-10/12 md:grid-cols-3 gap-8 ">
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>

        </div>
      </div>

      {/* FAQ */}
      <FAQSection />
      <Footer />
    </main>
  )
}

export default Main
