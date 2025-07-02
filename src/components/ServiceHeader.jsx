import React, { useState } from 'react'
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
export default function ServiceHeader() {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-gradient-to-r from-black to-purple-800 shadow shadow-purple-500 p-3 sticky top-0 z-50 px-4">
      <div className="w-full flex max-w-6xl mx-auto justify-between items-center">
        <div className="  px-2 border-r-[3px] border-purple-800">
          <Link to={"/"}>
          
          <h1 className="text-purple-900 text-2xl [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]  md:text-2xl leading-snug font-manrope font-extrabold">
            FrontEndLab
          </h1>
          </Link>
        </div>
        <div className="">
          <u className=" gap-10 text-base hidden md:flex lg:flex uppercase">
            <Link to={"/"}>
              <span className="text-white hover:text-purple-600 duration-300">
                Home
              </span>
            </Link>
            <Link to={"/web-development"}>
              <span className="text-white hover:text-purple-600 duration-300">
                Web Development
              </span>
            </Link>
            <Link to={"/web-design"}>
              <span className="text-white hover:text-purple-600 duration-300">
                Web Design
              </span>
            </Link>
            <Link to={"/seo"}>
              <span className="text-white hover:text-purple-600 duration-300">
                SEO
              </span>
            </Link>
           
          </u>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-black to-purple-800 shadow flex items-center justify-center text-2xl p-1">
            <FaPhoneAlt className="text-purple-300" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-black to-purple-800 shadow flex items-center justify-center text-2xl p-1">
            <MdMarkEmailUnread className="text-purple-300" />
          </div>
        </div>
        <HiOutlineMenuAlt3
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white hover:text-purple-600 duration-300 cursor-pointer md:hidden lg:hidden"
        />
      </div>
      {isOpen && (
        <div className="flex justify-center px-5 py-5 transition-all duration-300">
          <u className=" gap-5 text-base flex flex-col md:hidden lg:hidden justify-center">
            <Link to={"/"}>
              <span className="text-white hover:text-purple-600 duration-300">
                Home
              </span>
            </Link>
            <Link to={"/web-development"}>
              <span className="text-white hover:text-purple-600 duration-300">
                Web Development
              </span>
            </Link>
            <Link to={"/web-design"}>
              <span className="text-white hover:text-purple-600 duration-300">
                Web Design
              </span>
            </Link>
            <Link to={"/seo"}>
              <span className="text-white hover:text-purple-600 duration-300">
                SEO
              </span>
            </Link>
            <Link to={"/graphic"}>
              <span className="text-white hover:text-purple-600 duration-300">
                Graphic Design
              </span>
            </Link>
          </u>
        </div>
      )}
    </nav>
  );
}
