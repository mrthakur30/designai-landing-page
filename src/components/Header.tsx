import React from "react";
import Logo from "../assets/navlogo.svg"
import { PhoneIcon } from "@heroicons/react/24/outline";
const Header: React.FC = () => {


    return (
        <header
            className={` top-0 bg-white w-full p-3 transition-colors duration-300 bg-opacity-50  backdrop-blur z-50`}
        >
            <div className="container mx-auto flex items-center justify-evenly">
                <div className="">
                    <img src={Logo} alt="Logo" className="h-10 " />
                </div>
                <div className="text-white flex items-center space-x-4">
                    <span className=" animate-bounce">
                        <PhoneIcon color="#384B70"  />
                    </span>
                    <a href="https://api.whatsapp.com/send?phone=+916363759171&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Your%20Designs">
                        <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                            Contact Us
                        </button>
                    </a>
                </div>
            </div>
        </header >
    );
};

export default Header;
