import React from "react";
import { motion } from "framer-motion";
import { icons, iconsProject } from "../assets/caruselData";
import { FaCode, FaShoppingBag } from "react-icons/fa";
import { SiAntdesign, SiCoinmarketcap, SiWritedotas } from "react-icons/si";
import { FaEarthAmericas } from "react-icons/fa6";
import  redux from '../assets/reduxBlog.png'
export default function Projects() {
  return (
    <div className="w-full bg-white h-auto py-10">
      <div className="w-full uppercase flex justify-center  items-center relative mb-4">
        <p className="text-4xl lgl:text-7xl xl:text-8xl text-[#f7f7f7] font-bold text-center uppercase">
          what we offer
        </p>
        <h1 className="text-xl md:text-3xl lgl:text-4xl font-semibold absolute flex gap-4">
          what
          <span className="text-purple-800">we offer</span>
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <p className="text-base md:text-lg text-center tracking-wide px-4">
          To us, it's not just work - we take pride in the solutions we deliver.
          We encourage each other to achieve excellence in all endeavours and
          aren't satisfied until projects meet our own personal high standards.
          Please take a look at Our Process to see how we will bring your
          project into existance.
        </p>

        <div className="py-10 w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          <div className="w-full border h-96 bg-white shadow hover:shadow-none relative group overflow-hidden transform">
            <div className=" px-4 mdl:p-6 w-full h-full absolute z-10 flex flex-col justify-center items-center gap-5 top-0 group-hover:-top-3 transition-all duration-500">
              <div className="">
                <FaCode className="text-black group-hover:text-purple-800 text-5xl font-bold" />
              </div>
              <h1 className="text-2xl font-semibold group-hover:text-purple-800">
                Website Development
              </h1>
              <p className="text-base font-medium text-gray-700 text-center group-hover:text-purple-200 group-hover:text-2xl">
                We use advanced tools and tech to create visually stunning,
                functional websites tailored to your unique business needs.
                Trust us to help you achieve your digital goals.
              </p>
            </div>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-0/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-1/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-2/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-3/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <div className="w-[85%] h-[90%] pb-6 bg-service-bg group-hover:bg-opacity-10 absolute top-1/2 left-1/2 bg-no-repeat bg-contain  transform -translate-x-1/2 -translate-y-[43%] filter brightness-100 group-hover:brightness-25 duration-300"></div>
          </div>
          <div className="w-full border h-96 bg-white shadow hover:shadow-none relative group overflow-hidden transform">
            <div className=" px-4 mdl:p-6 w-full h-full absolute z-10 flex flex-col justify-center items-center gap-5 top-0 group-hover:-top-3 transition-all duration-500">
              <div className="">
                <FaShoppingBag className="text-black group-hover:text-purple-800 text-5xl font-bold" />
              </div>
              <h1 className="text-2xl font-semibold group-hover:text-purple-800">
                Ecommerce Solutions
              </h1>
              <p className="text-base font-medium text-gray-700 text-center  group-hover:text-purple-200 group-hover:text-2xl">
                With our best-customized eCommerce website design solutions. We
                try to deliver a high-quality user interface to visitors that
                encourage them to buy the products with low cost ecommerce
                website.
              </p>
            </div>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-0/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-1/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-2/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-3/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <div className="w-[85%] h-[90%] pb-6 bg-service-bg group-hover:bg-opacity-10 absolute top-1/2 left-1/2 bg-no-repeat bg-contain  transform -translate-x-1/2 -translate-y-[43%] filter brightness-100 group-hover:brightness-25 duration-300"></div>
          </div>

          <div className="w-full border h-96 bg-white shadow hover:shadow-none relative group overflow-hidden transform">
            <div className=" px-4 mdl:p-6 w-full h-full absolute z-10 flex flex-col justify-center items-center gap-5 top-0 group-hover:-top-3 transition-all duration-500">
              <div className="">
                <SiAntdesign className="text-black group-hover:text-purple-800 text-5xl font-bold" />
              </div>
              <h1 className="text-2xl font-semibold group-hover:text-purple-800">
                UI/UX Developer
              </h1>
              <p className="text-base font-medium text-gray-700 text-center group-hover:text-purple-200 group-hover:text-2xl">
                Provide captivating User interface and smooth & seamless
                navigation to the online users to make them your regular
                customers.
              </p>
            </div>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-0/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-1/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-2/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-3/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <div className="w-[85%] h-[90%] pb-6 bg-service-bg group-hover:bg-opacity-10 absolute top-1/2 left-1/2 bg-no-repeat bg-contain  transform -translate-x-1/2 -translate-y-[43%] filter brightness-100 group-hover:brightness-25 duration-300"></div>
          </div>
          <div className="w-full border h-96 bg-white shadow hover:shadow-none relative group overflow-hidden transform">
            <div className=" px-4 mdl:p-6 w-full h-full absolute z-10 flex flex-col justify-center items-center gap-5 top-0 group-hover:-top-3 transition-all duration-500">
              <div className="">
                <SiCoinmarketcap className="text-black group-hover:text-purple-800 text-5xl font-bold" />
              </div>
              <h1 className="text-2xl font-semibold group-hover:text-purple-800">
                SEO Solutions
              </h1>
              <p className="text-base font-medium text-gray-700 text-center group-hover:text-purple-200 group-hover:text-2xl">
                We use advanced tools and tech to create visually stunning,
                functional websites tailored to your unique business needs.
                Trust us to help you achieve your digital goals.
              </p>
            </div>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-0/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-1/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-2/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-3/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <div className="w-[85%] h-[90%] pb-6 bg-service-bg group-hover:bg-opacity-10 absolute top-1/2 left-1/2 bg-no-repeat bg-contain  transform -translate-x-1/2 -translate-y-[43%] filter brightness-100 group-hover:brightness-25 duration-300"></div>
          </div>
          <div className="w-full border h-96 bg-white shadow hover:shadow-none relative group overflow-hidden transform">
            <div className=" px-4 mdl:p-6 w-full h-full absolute z-10 flex flex-col justify-center items-center gap-5 top-0 group-hover:-top-3 transition-all duration-500">
              <div className="">
                <FaEarthAmericas className="text-black group-hover:text-purple-800 text-5xl font-bold" />
              </div>
              <h1 className="text-2xl font-semibold group-hover:text-purple-800">
                Domain/Hosting
              </h1>
              <p className="text-base font-medium text-gray-700 text-center group-hover:text-purple-200 group-hover:text-2xl">
                With our best-customized eCommerce website design solutions. We
                try to deliver a high-quality user interface to visitors that
                encourage them to buy the products with low cost ecommerce
                website.
              </p>
            </div>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-0/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-1/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-2/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-3/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <div className="w-[85%] h-[90%] pb-6 bg-service-bg group-hover:bg-opacity-10 absolute top-1/2 left-1/2 bg-no-repeat bg-contain  transform -translate-x-1/2 -translate-y-[43%] filter brightness-100 group-hover:brightness-25 duration-300"></div>
          </div>
          <div className="w-full border h-96 bg-white shadow hover:shadow-none relative group overflow-hidden transform">
            <div className=" px-4 mdl:p-6 w-full h-full absolute z-10 flex flex-col justify-center items-center gap-5 top-0 group-hover:-top-3 transition-all duration-500">
              <div className="">
                <SiWritedotas className="text-black group-hover:text-purple-800 text-5xl font-bold" />
              </div>
              <h1 className="text-2xl font-semibold group-hover:text-purple-800">
                Content Writing
              </h1>
              <p className="text-base font-medium text-gray-700 text-center group-hover:text-purple-200 group-hover:text-2xl">
                Provide captivating User interface and smooth & seamless
                navigation to the online users to make them your regular
                customers.
              </p>
            </div>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-0/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-1/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 -translate-y-[100%] left-2/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <p className="w-1/4 h-full bg-black  inline-block absolute top-0 translate-y-[100%] left-3/4 group-hover:translate-y-0 transition-transform duration-500"></p>
            <div className="w-[85%] h-[90%] pb-6 bg-service-bg group-hover:bg-opacity-10 absolute top-1/2 left-1/2 bg-no-repeat bg-contain  transform -translate-x-1/2 -translate-y-[43%] filter brightness-100 group-hover:brightness-2 duration-300"></div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 flex flex-col gap-5 bg-gradient-to-t from-[#212121] via-[#212121] to-black relative">
        <div className="w-full uppercase flex justify-center items-center relative mb-4 z-10">
          <p className="text-4xl md:text-6 lg:text-8xl text-zinc-800 font-bold">
            Technologies
          </p>
          <h1 className="w-full text-center absolute uppercase text-2xl md:text-4xl lg:text-5xl font-semibold">
            Technologies
            <span className="text-purple-800"> We use</span>
          </h1>
        </div>
        <div className="max-w-6xl mx-auto ">
          <p className="text-base text-gray-200 text-center">
            We have worked with top-notch businesses across various industries
            to build scalable softwares, mobile apps, e-commerce websites,
            custom marketplaces, and web solutions that are specifically
            tailored to suit their changing business requirements using the
            latest and proven technologies.
          </p>

        </div>
        <div className="w-full h-full grid grid-cols-2 gap-10 md:grid-cols-8 lgl:grid-cols-8 place-items-center overflow-hidden mt-12  ">
          {/* <div className="hidden lgl:inline-flex"></div> */}

          {iconsProject.map((item) => (
            <div key={item.id} className=" w-44 flex flex-col items-center">
              <img src={item.image} alt="" className="w-[60%] object-cover" />
            </div>
          ))}
          

          <div className="w-full h-full absolute top-0 left-0 grid grid-cols-7 justify-center overflow-hidden z-10">
            <div className="w-full h-full relative border-r-[1px] border-gray-800">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-full bg-transparent inline-flex absolute -right-[1px] after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-purple-800 animation-animation-run animation-delay-600"
              ></motion.span>
            </div>
            <div className="w-full h-full relative border-r-[1px] border-gray-800">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-full bg-transparent inline-flex absolute -right-[1px] after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-purple-800 animation-animation-run animation-delay-600"
              ></motion.span>
            </div>
            <div className="w-full h-full relative border-r-[1px] border-gray-800">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-full bg-transparent inline-flex absolute -right-[1px] after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-purple-800 animation-animation-run animation-delay-600"
              ></motion.span>
            </div>
            <div className="w-full h-full relative border-r-[1px] border-gray-800">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-full bg-transparent inline-flex absolute -right-[1px] after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-purple-800 animation-animation-run animation-delay-600"
              ></motion.span>
            </div>
            <div className="w-full h-full relative border-r-[1px] border-gray-800">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-full bg-transparent inline-flex absolute -right-[1px] after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-purple-800 animation-animation-run animation-delay-600"
              ></motion.span>
            </div>
            <div className="w-full h-full relative border-r-[1px] border-gray-800">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-full bg-transparent inline-flex absolute -right-[1px] after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-purple-800 animation-animation-run animation-delay-600"
              ></motion.span>
            </div>
            <div className="w-full hidden md:flex lg:flex h-full relative border-r-[1px] border-gray-800">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-full bg-transparent inline-flex absolute -right-[1px] after:w-full after:h-16 after:bg-gradient-to-t after:from-white after:to-purple-800 animation-animation-run animation-delay-600"
              ></motion.span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
