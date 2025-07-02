import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
motion;
export default function Header() {
  const [sideBarState, setSideBarState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBarState(false);
      }
    });
  });
  const path = useLocation();

  const pathMathRoute = (route) => {
    if (route === path.pathname) {
      return true;
    }
  };
  


  return (
    <div className="bg-gradient-to-r from-black to-purple-800 shadow shadow-purple-500    w-full px-4 sticky top-0 z-20">
      <div className=" w-full flex max-w-6xl mx-auto justify-between items-center p-3">
        <div className="  px-2 border-r-[3px] border-purple-800">
          <h1 className="text-purple-900 text-base lg:text-2xl [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]  md:text-2xl leading-snug font-manrope font-extrabold">
            FrontEndLab
          </h1>
        </div>
        <div className="text-white hidden md:hidden lg:flex">
          <ul className="flex gap-10 uppercase font-semibold">
            <Link to={"/"}>
              <li className="text-base text-white hover:text-purple-600 duration-300">Home</li>
            </Link>
            <Link to={"/about-us"}>
              <li className="text-base text-white hover:text-purple-600 duration-300">about us</li>
            </Link>
            <Link to={"/service"}>
              <li className="text-base text-white hover:text-purple-600 duration-300">service</li>
            </Link>
            <Link to={"/faq"}>
              <li className="text-base text-white hover:text-purple-600 duration-300">faq</li>
            </Link>
            <Link to={"/contact"}>
              <li className="text-base text-white hover:text-purple-600 duration-300">contact</li>
            </Link>
          </ul>
        </div>
        <div className="text-white">
          <span
            onClick={() => setSideBarState(!sideBarState)}
            className="flex items-center cursor-pointer gap-3 bg-gradient-to-r from-black to-purple-800 px-2 py-3 rounded-lg font-semibold"
          >
            <h1 className="text-base uppercase">enquire</h1>
            <FaArrowRight />
          </span>
        </div>
        <HiOutlineMenuAlt3
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white hover:text-purple-600 duration-300 cursor-pointer  lg:hidden"
        />
      </div>
      {isOpen && (
        <div className="py-5 px-4 flex justify-center duration-300">
          <ul className="flex flex-col md:flex-row md:py-8 gap-5 uppercase font-semibold justify-center">
            <Link to={"/"}>
              <li className="text-base font-semibold text-white hover:text-purple-600 ">
                Home
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li className="text-base font-semibold text-white hover:text-purple-600 ">
                about us
              </li>
            </Link>
            <Link to={"/service"}>
              <li className="text-base font-semibold text-white hover:text-purple-600 ">
                service
              </li>
            </Link>
            <Link to={"/faq"}>
              <li className="text-base font-semibold text-white hover:text-purple-600 ">
                faq
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="text-base font-semibold text-white hover:text-purple-600 ">
                contact
              </li>
            </Link>
          </ul>
        </div>
      )}
      {sideBarState && (
        <div className="w-full  h-screen bg-[#0f0f0fcc] top-0 left-0 right-0 z-30 fixed">
          <motion.div
            ref={ref}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed right-0 h-screen flex "
          >
            <div className="flex items-center z-40 gap-1 absolute top-72 -left-4 md:-left-20 lg:-left-24">
              <h1 className="text-2xl rotate-90 text-white hidden md:flex lg:flex">
                close
              </h1>
              <div
                onClick={() => setSideBarState(!sideBarState)}
                className="w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 cursor-pointer bg-gradient-to-r from-black to-purple-800 rounded-full flex justify-center items-center"
              >
                <FaTimes className="text-3xl text-white" />
              </div>
            </div>
            <div className="w-[350px] md:w-[600px] lg:w-[700px] h-full bg-gradient-to-r from-black to-purple-800 relative px-2 md:px-5 lg:px-10 py-7">
              <SideBar />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
