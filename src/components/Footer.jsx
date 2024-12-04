import React from 'react'
import BottomFooter from './BottomFooter';
import { footerQuickLinks, footerServicesList } from '../assets/caruselData';
import { ul } from 'framer-motion/client';
import { FaFolder, FaHome, FaMobile } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export default function Footer() {
  return (
    <div className="w-full footerImg bg-center bg-cover bg-no-repeat ">
      <div className="w-full h-full bg-black/90 py-10 px-4">
        <div className="max-w-6xl mx-auto py-5 grid grid-cols-1 md:grid-cols-3 gap-5  lg:grid-cols-3 w-full px-8 lg:px-0">
          <div className="flex flex-col justify-center gap-3 w-full">
            <h1 className="text-xl font-medium text-purple-400 uppercase tracking-wide">
              SERVICES
            </h1>
            {footerServicesList?.map((item) => (
              <div key={item._id} className="w-full flex flex-col">
                <a
                  href=""
                  className="text-white text-base hover:text-purple-600 duration-300"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-2 w-full">
            <h1 className="text-xl font-medium text-purple-400 uppercase tracking-wide">
              QUICK LINKS
            </h1>
            {footerQuickLinks?.map((item) => (
              <div key={item._id} className="">
                <a
                  href=""
                  className="text-white text-base hover:text-purple-600 duration-300"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-xl font-medium text-purple-400 uppercase tracking-wide">
              Contact us
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-white flex items-center gap-2">
                <FaMobile className="text-purple-600 text-xl" /> 24/7 Helpline:
                +233535949011
              </p>
              <p className="flex items-center gap-2">
                <FaHome className="text-purple-600 text-xl" />
                <span className="text-white">Kumasi/Ghana</span>
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineMail className="text-purple-600 text-xl" />
                <span className="text-white">nanakwametuffour44@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineMail className="text-purple-600 text-xl" />
                <span className="text-white">frontendlab12@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-10 w-full">
          <BottomFooter />
        </div>
      </div>
    </div>
  );
} 
