import React from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { SiGithub, SiDiscord } from "react-icons/si";



export default function BottomFooter() {
     return (
       <div className="w-full mdl:max-w-[600px] mx-auto border-t-[1px] border-purple-400 py-8 flex flex-col gap-4 items-center justify-center mt-5 lg:mt-0">
         <div className="flex items-center gap-2 mdl:gap-3">
           <a
             href="#"
             target="_blank"
             rel="noreferrer"
           >
             <span className="w-8 h-8  text-base text-purple-600 mdl:w-10 mdl:h-10 mdl:text-xl rounded-full inline-flex items-center justify-center border-[2px] border-zinc-400 hover:bg-[#cd201f] hover:border-[#cd201f] duration-300 cursor-pointer">
               <FaYoutube />
             </span>
           </a>
           <a
             href="#"
             target="_blank"
             rel="noreferrer"
           >
             <span className="w-8 h-8 text-base text-purple-600 mdl:w-10 mdl:h-10 mdl:text-xl rounded-full inline-flex items-center justify-center border-[2px] border-zinc-400 hover:bg-[#00405d] hover:border-[#00405d] duration-300 cursor-pointer">
               <SiGithub />
             </span>
           </a>
           <a
             href="#"
             target="_blank"
             rel="noreferrer"
           >
             <span className="w-8 h-8 text-base text-purple-600 mdl:w-10 mdl:h-10 mdl:text-xl rounded-full inline-flex items-center justify-center border-[2px] border-zinc-400 hover:bg-[#C13584] hover:border-[#C13584] duration-300 cursor-pointer">
               <FaInstagram />
             </span>
           </a>
           <a
             href="#"
             target="_blank"
             rel="noreferrer"
           >
             <span className="w-8 h-8 text-base text-purple-600 mdl:w-10 mdl:h-10 mdl:text-xl rounded-full inline-flex items-center justify-center border-[2px] border-zinc-400 hover:bg-[#3b5998] hover:border-[#3b5998] duration-300 cursor-pointer">
               <FaFacebookF />
             </span>
           </a>
           <a
             href="#"
             target="_blank"
             rel="noreferrer"
           >
             <span className="w-8 h-8 text-base text-purple-600 mdl:w-10 mdl:h-10 mdl:text-xl rounded-full inline-flex items-center justify-center border-[2px] border-zinc-400 hover:bg-[#0077b5] hover:border-[#0077b5] duration-300 cursor-pointer">
               <FaLinkedinIn />
             </span>
           </a>
           <a
             href="#"
             target="_blank"
             rel="noreferrer"
           >
             <span className="w-8 h-8 text-base text-purple-600 mdl:w-10 mdl:h-10 mdl:text-xl rounded-full inline-flex items-center justify-center border-[2px] border-white hover:bg-[#5865F2] hover:border-[#5865F2] duration-300 cursor-pointer">
               <SiDiscord />
             </span>
           </a>
         </div>
         <p className="text-base mdl:text-sm text-center text-gray-300">
           &copy; Copyright 2024 by FrontEndLab. All Rights Reserved.
            <span className=" capitalize">created by Nana kwame tuffour</span>
         </p>
       </div>
     );
}

