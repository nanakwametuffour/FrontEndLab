import React, { useState } from "react";
import Carusel from "./Carusel";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
   const [result, setResult] = useState("");

   const onSubmit = async (event) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target);

     formData.append("access_key", "afcf4fe3-656d-427c-8303-1d322a6af46b");

     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData,
     });

     const data = await response.json();

     if (data.success) {
       setResult("Form Submitted Successfully");
       event.target.reset();
     } else {
       setResult(data.message);
     }
   };
  return (
    <div className="w-full px-1 md:px-2 lg:px-4 relative bg-[#121212] h-auto top-0">
      <div className=" w-full flex flex-col py-10 ">
        <div className="w-full h-full  flex flex-col md:flex-row lg:flex-row justify-between gap-10 px-1 md:px-2 lg:px-4">
          <div className="text-white w-full flex h-auto flex-col gap-4">
            <div className="flex flex-col gap-2 px-2">
              <h1 className="text-purple-400 text-base md:text-3xl lg:text-4xl font-semibold">
                FrontEndLab web development company
              </h1>
              <p className="text-base">
                is a premier that empowers businesses to establish and
                strengthen their online brand presence. Our dynamic digital
                strategy caters to both startups and enterprises, providing
                customized and robust web solutions. Choose FrontEndLab to
                thrive in the ever-evolving digital space with a trusted and
                reliable web development partner. Let's find some of our key
                features:
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <p className="flex w-full items-center gap-1">
                <span className="w-3 h-3 bg-purple-900 rounded-full"></span>
                <li className="text-gray-300 text-sm hover:text-white duration-300 line-clamp-1 lg:line-clamp-0">
                  Affordable Multivendor/Marketplace Website Development
                  Packages
                </li>
              </p>

              <p className="flex w-full items-center gap-2">
                <span className="w-3 h-3 bg-purple-900 rounded-full"></span>
                <li className="text-gray-300 text-sm hover:text-white duration-300 line-clamp-1 lg:line-clamp-0">
                  We develop a website where visitor turns into a customer.
                </li>
              </p>
              <p className="flex w-full items-center gap-2">
                <span className="w-3 h-3 bg-purple-900 rounded-full"></span>
                <li className="text-gray-300 text-base hover:text-white duration-300">
                  Free warranty for a Year .
                </li>
              </p>
              <p className="flex w-full items-center gap-2">
                <span className="w-3 h-3 bg-purple-900 rounded-full"></span>
                <li className="text-gray-300 text-base hover:text-white duration-300">
                  Cloud Solutions.
                </li>
              </p>
              <p className="flex w-full items-center gap-2">
                <span className="w-3 h-3 bg-purple-900 rounded-full"></span>
                <li className="text-gray-300 text-base hover:text-white duration-300">
                  Third-Party Integrations (CRM and more).
                </li>
              </p>
              <p className="flex w-full items-center gap-2">
                <span className="w-3 h-3 bg-purple-900 rounded-full"></span>
                <li className="text-gray-300 text-base hover:text-white duration-300">
                  Website for both B2B & B2C.
                </li>
              </p>
              <p className="flex w-full items-center gap-2">
                <span className="w-3 h-3 bg-purple-900 rounded-full"></span>
                <li className="text-gray-300 text-sm hover:text-white duration-300 line-clamp-1 lg:line-clamp-0">
                  Affordable Multivendor/Marketplace Website Development
                  Packages
                </li>
              </p>
              <button className="bg-gradient-to-r from-black to-purple-800 shadow uppercase py-2 w-[100%] md:w-[70%] lg:w-[50%] rounded-lg">
                free consultation
              </button>
            </div>
          </div>
          <div className="  text-white w-[100%] h-auto flex  flex-col bg-gradient-to-r from-black to-purple-800 px-2 md:px-5 lg:px-5 py-5 gap-3">
            <div className=" w-full justify-center items-center flex flex-col gap-3 px-2">
              <h1 className="text-4xl">
                Hola! We Love Talking <br />
                With Our Site Visitors
              </h1>
              <p>
                Leave your query below and in a moment our Web Development
                Expert will be in touch with you
              </p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="w-full border-b hover:border-purple-500">
                <input
                  type="text"
                  name="text"
                  required
                  className="bg-transparent p-2 placeholder:px-3 w-full ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="w-full border-b hover:border-purple-500">
                <input
                  type="text"
                   name="email"
                   required
                  className="bg-transparent p-2 placeholder:px-3 w-full ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="w-full border-b hover:border-purple-500">
                <input
                  type="text"
                  name="number"
                  required
                  className="bg-transparent p-2 placeholder:px-3 w-full ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="w-full border-b hover:border-purple-500">
                <textarea
                  name="message"
                  required
                  id=""
                  placeholder="Brief Your Projects"
                  className="w-full ring-0 p-2 placeholder:px-3 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none bg-transparent py-4"
                ></textarea>
              </div>
              <div className="py-4">
                <button className="border w-full flex justify-center gap-3 py-3 items-center">
                  <span>Submit</span>
                  <FaArrowRight />
                </button>
              </div>
               <span className="text-green-500 py-5">{result}</span>
            </form>
          </div>
        </div>
        <div className="">
          <Carusel />
        </div>
      </div>
    </div>
  );
}
