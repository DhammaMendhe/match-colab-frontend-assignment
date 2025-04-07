import React from "react";
import coupleImage from "../assets/closeup-woman-sitting-man-s-back-looking-happy-removebg-preview.png";
export default function Hero() {
  return (
    <div className="upperdiv px-7 py-6  bg-blue-100 border flex justify-center">
      <div className=" flex  bg-blue-300 gap-7 sm:justify-center items-center rounded-md">
      <p className="before:content-['<'] text-2xl font-bold text-white px-7"></p>

        <div className="main-heading text-left flex-col leading-[1.5]  ">
          
            <h1 className="text-white font-bold text-3xl mb-2  ">
              Featured Profiles
            </h1>
            <p className="text-white font-medium text-[15px]  ">
              curate with care to spark meaninigful 
            </p>
            <p className="text-white font-medium text-[15px]  ">
           connections
            </p>
        </div>
        <div className="hero-img">
          <img
            className="max-xl: h-64 rounded-md"
            src={coupleImage}
            alt="couplephoto"
          />
        </div>
        <p className="before:content-['>'] text-2xl font-bold text-white px-7"></p>
      </div>
    </div>
  );
}
