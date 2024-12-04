import React from "react";
import { FaRegHandPointDown } from "react-icons/fa";
 import company from '../assets/company1.jpg'
export default function Order() {
  return (
    <div className="bg-white text-black orderBk bg-cover bg-center bg-no-repeat py-10">
      <div className="max-w-screen-xl w-full   mx-auto relative py-10  px-6">
        <div className="w-full flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full flex flex-col justify-between gap-16">
            <div>
              <h1
                className=" text-white uppercase text-2xl font-medium w-full"
                style={{ opacity: 1 }}
              >
                <span className="text-purple-600 hover:underline underline-offset-2 duration-200">
                  Home{" "}
                </span>
                / Order
              </h1>
            </div>
            <div style={{ opacity: 1 }}>
              <div className="relative">
                <h2 className="text-3xl md:text-[40px] text-white font-semibold flex items-center">
                  <span className="text-7xl text-purple-600">O</span> rder
                </h2>
                <p className="max-w-[600px] text-base text-white font-semibold">
                  It will be our pleasure to commit to a long-term cooperation
                  and partnership.
                </p>
              </div>
            </div>
            <div className="flex gap-6 w-full px-1 flex-wrap">
              <button className="w-[60%] md:w-44 lg:w-44  h-11 bg-gradient-to-r from-black to-purple-800 hover:bg-purple-950 text-black rounded-full text-sm lg:text-base font-semibold border border-purple-400 duration-300 ">
                Website
              </button>
              <button className="w-[60%] md:w-44 lg:w-44  h-11 bg-gradient-to-r from-black to-purple-800 hover:bg-purple-950 text-black rounded-full text-sm lg:text-base font-semibold border border-purple-400 duration-300 ">
                Graphic Design
              </button>
              <button className="w-[60%] md:w-44 lg:w-44  h-11 bg-gradient-to-r from-black to-purple-800 hover:bg-purple-950 text-black rounded-full text-sm lg:text-base font-semibold border border-purple-400 duration-300 ">
                E-marketing
              </button>
            </div>
          </div>
          <div className="w-full text-white flex justify-center">
            <img src={company} alt="" className="w-full h-full object-cover hover:scale-105 duration-300"/>
          </div>
        </div>
        <form className="max-w-4xl mt-10 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h1 className="text-white">
              Please fill in the required fields below
            </h1>
            <FaRegHandPointDown className="text-purple-600 text-3xl animate-bounce" />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              className="bg-transparent text-white px-4 p-2 placeholder:px-3  w-full ring-0 focus:ring-0 shadow  focus:outline-none border border-purple-950 focus:border rounded-full"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-transparent text-white px-4 p-2 placeholder:px-3  w-full ring-0 focus:ring-0 shadow  focus:outline-none border border-purple-950 focus:border rounded-full"
              type="text"
              placeholder="Company"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
