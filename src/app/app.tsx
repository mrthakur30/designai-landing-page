
import Form from "../components/Form"
import Header from "../components/Header"
import { BiHome } from "react-icons/bi";
import { MdRoomPreferences, } from "react-icons/md";
import { GrHomeOption } from "react-icons/gr";
import BeforeAfterSlider from "components/BeforeAfterSlider";
import Footer from "components/Footer";
import { useState } from "react";
import Slider from "components/Slider";

const Main = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <main className="w-full min-h-screen bg-green-4 ">
      <Header />
         {showForm && (
         <div className=" z-40 w-screen fixed  h-screen">
          <Form />
        </div>
       )} 
      <div className="md:ml-8 md:pt-28 pt-20 flex justify-center md:justify-start items-center">
        <p className=" font-semibold md:text-2xl rounded-3xl bg-gradient-to-r my-7 from-green-1 px-2 py-1 to-transparent text-center">Used by over 2 million people to redesign homes</p>
      </div>

      <img src="/bg.webp" className="hidden w-72 md:block absolute right-36 top-36" alt="" />

      <div className="md:ml-8 mx-4 flex md:flex-row flex-col justify-center md:justify-start items-center md:gap-7 ">
        <span className="text-2xl font-bold ">
          Your personal <span className="text-green-2"> AI</span> interior designer
        </span>
        <button
        onClick={()=>setShowForm(true)}
        className="flex text-xl w-36 mt-5 md:mt-0 shadow-md shadow-green-2 rounded-2xl justify-center items-center  bg-green-3 text-green-0 md:px-4 px-3 py-2 font-semibold">
          <span>
            Get Free
          </span>
        </button>
      </div>
      <div className="">

      </div>
      {/* Features */}
      {/* <div className="py-10">
         <h1 className="text-xl md:text-5xl font-semibold px-10 text-zinc-800">Features and Benefits</h1>
         <Slider images={data} />
      </div> */}

      <div className="py-10 w-full p-4 md:px-8 flex flex-col gap-3 justify-start">
        <h1 className="text-3xl font-bold text-left">Design AI <br /> Features</h1>
        <p className="text-gray-400 font-semibold">Enhance your image's resolution and achieve crisp, <br /> clear quality with a single click.</p>
        <button onClick={()=>setShowForm(true)} className="flex md:text-xl rounded-3xl text-lg justify-center w-28 items-center text-green-3 bg-green-1 px-4 py-2 font-semibold">
          Try Now
        </button>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full transition-all hover:shadow-green-1 bg-gray-100 shadow-md bg-opacity-30 p-6 b rounded-2xl">
            <BiHome color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5"> Design Interior</h1>
            <p className="font-semibold mt-2 text-gray-400">Variety of settings to generate perfect interior for your needs.</p>
          </div>
          <div className="w-full transition-all hover:shadow-green-1 bg-gray-100 shadow-md bg-opacity-30  p-6  rounded-2xl">
            <MdRoomPreferences color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">   Transform your existing room</h1>
            <p className="font-semibold mt-2 text-gray-400">
              Upload an image of your room and our AI will restyle it with your chosen design preferences.
            </p>
          </div>
          <div className="w-full transition-all hover:shadow-green-1 bg-gray-100 shadow-md bg-opacity-30 p-6  rounded-2xl">
            <GrHomeOption color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5"> Manage room type</h1>
            <p className="font-semibold mt-2 text-gray-400">
              No matter what type of room you're designing, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Types */}

      <div>
         <Slider />
      </div>

      <div className="py-10 w-full p-4 md:px-8 flex flex-col  gap-3 justify-start">
        <span className="text-3xl md:text-center font-bold text-left">Check Examples of <br className="md:hidden" /><span className="text-green-2">DesignAI</span> </span>

        <div className="">
          <div>
            <BeforeAfterSlider
              beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fyashsharma2493%40gmail.com_WhatsApp%20Image%202024-01-19%20at%2018.59.46.jpeg?alt=media&token=2fe42869-f2d2-44e9-9493-4e4429dc80de"}
              afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_46b7a19d-31dc-4012-a84d-fd2170f11a1e.jpg?alt=media&token=fbf8ab01-b76b-4ce1-8059-f327f4cbe95d"}
            />
          </div>

          <div>
            <BeforeAfterSlider
              beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fyashsharma2493%40gmail.com_WhatsApp%20Image%202024-01-19%20at%2018.59.46.jpeg?alt=media&token=2fe42869-f2d2-44e9-9493-4e4429dc80de"}
              afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_46b7a19d-31dc-4012-a84d-fd2170f11a1e.jpg?alt=media&token=fbf8ab01-b76b-4ce1-8059-f327f4cbe95d"}
            />
          </div>

          <div>
            <BeforeAfterSlider
              beforeImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/designs%2Fbefore%2Fyashsharma2493%40gmail.com_WhatsApp%20Image%202024-01-19%20at%2018.59.46.jpeg?alt=media&token=2fe42869-f2d2-44e9-9493-4e4429dc80de"}
              afterImage={"https://firebasestorage.googleapis.com/v0/b/design-elementary-2.appspot.com/o/myfile%2Fchanged%2Fdesign_46b7a19d-31dc-4012-a84d-fd2170f11a1e.jpg?alt=media&token=fbf8ab01-b76b-4ce1-8059-f327f4cbe95d"}
            />
          </div>
        </div>

      </div>

      {/* FAQ */}

      <Footer />
   
    </main>
  )
}

export default Main
