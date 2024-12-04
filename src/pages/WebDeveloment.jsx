import React, { useState } from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
import Round1 from "../components/round/Round1";
import Round3 from "../components/round/Round3";
import Round2 from "../components/round/Round2";
import { serviceItem } from "../assets/caruselData";

export default function WebDeveloment() {
  return (
    <div>
      <div className="w-full bg-[#18181B] relative">
        <div className="w-full h-full">
          <div className="w-full h-full aboutImg bg-center bg-cover py-10 relative">
            <div className="max-w-screen-xl bg-black bg-opacity-90 mx-auto relative py-10 lg:py-16 px-6">
              <div className="w-full h-full flex flex-col md:flex-col lg:flex-row items-center gap-6">
                <div className="w-full lgl:w-full h-full flex flex-col justify-between">
                  <h1
                    className="text-zinc-300 uppercase text-2xl font-medium"
                    style={{ opacity: 1 }}
                  >
                    <span className="text-purple-600 hover:underline underline-offset-2 duration-200">
                      Home
                    </span>
                    / Web Development Services
                  </h1>
                  <div style={{ opacity: 1 }}>
                    <h1 className="text-[200px] font-extrabold text-purple">W</h1>
                    <div className="-mt-[106px] md:-mt-[111px] gap-3 flex flex-col">
                      <h2 className="text-3xl md:text-[40px] text-white font-semibold">
                        Web Development
                      </h2>
                      <p className="max-w-[600px] text-base text-zinc-200">
                        We are a top-notch web development company that can help
                        you define your brand and increase your revenue.
                        Full-Stack Web Development Services.
                      </p>
                    </div>

                    <div
                      className="flex flex-col md:flex-row ml-2 mt-16 items-start md:items-center gap-10 z-10 relative"
                      style={{ opacity: 1 }}
                    >
                      <Link to={"/order"}>
                        <div className="w-48 h-12 bg-gradient-to-l  from-black to-purple-800 shadow relative group">
                          <button className="w-48 h-12 bg-purple-900 text-black  font-semibold text-lg absolute -translate-x-2 -translate-y-2 transform group-hover:bg-purple-600 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                            Portfolio
                          </button>
                        </div>
                      </Link>
                      <Link to={"/order"}>
                        <div className="w-48 h-12 bg-gradient-to-l from-black to-purple-800 shadow relative group">
                          <button className="w-48 h-12 bg-purple-900 text-black  font-semibold text-lg absolute -translate-x-2 -translate-y-2 transform group-hover:bg-purple-700 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                            Order
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 z-20">
                  {serviceItem?.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col border border-purple-400 rounded-md cursor-pointer overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-[200px] w-full object-cover hover:scale-110 duration-300"
                      />
                      <div className="py-3 px-1 flex justify-center">
                        <p className="text-base capitalize">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                  <div className="w-full h-full flex flex-col md:flex-row lg:flex-row px-4 ">
                    <Round1 />
                    <Round2 />
                    <Round3 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black py-10 flex flex-col md:flex-row lg:flex-row gap-20 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <h1 className="text-3xl text-white font-medium underline underline-offset-8 decoration-[1px] decoration-purple-700">
              Clean coding principles
            </h1>
            <p className="text-base text-white tracking-wide">
              Experienced senior web developers with more than 10 years of
              experience with projects done for clients across the world can
              make your every web development dream come true.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Valid code
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Fast loading time
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Bug-free
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                User-friendly
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                SEO-friendly
              </li>
            </ul>
            <p className="text-white">
              We work in line with the latest trends in new technologies and
              responsive design. We are always active participants at
              international web technologies conferences.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                HTML5, CSS3, Tailwindcss Sass, Bootstrap, GraphQL
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                JavaScript, React.js, Next.js, Ract Native
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Nodejs, MongoDB, Express.js, Firebase, Sanity.io
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Figma, Adobe, Canva
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Vercel, Netlify, Back4App
              </li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <h1 className="text-3xl text-white font-medium underline underline-offset-8 decoration-[1px] decoration-purple-500">
              Project management methodology for success
            </h1>
            <p className="text-base text-white tracking-wide">
              Web developers from PopArt Studio team consists of work in line
              with methodology that results in the best performance. That is why
              we are proud of:
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Precise task allocation
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Narrow specialization
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Each project or task has our QA engineers’ approval
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-500 group-hover:bg-purple-900 duration-300"></span>
                Testing in all browsers and operating systems, and across
                various devices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
