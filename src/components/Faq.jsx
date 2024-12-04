import React, { useState } from "react";
import { questFaq } from "../assets/caruselData";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Faq() {
  const [clicked, setClicked] = useState(false);
   const toggle = (index) => {
     if (clicked === index) {
       //if clicked question is already active, then close it
       return setClicked(null);
     }

     setClicked(index);
   };

  return (
    <div className="w-full h-auto py-7">
      <div className="w-full uppercase flex justify-center items-center relative mb-4">
        <p class="text-4xl lgl:text-7xl xl:text-8xl text-[#f7f7f7] font-bold">
          Have Questions
        </p>
        <h1 class="text-xl md:text-3xl lgl:text-4xl font-semibold absolute">
          Frequently Asked <span class="text-purple-800">Questions</span>
        </h1>
      </div>
      <div class="max-w-6xl mx-auto flex flex-col gap-2 justify-center">
        {questFaq?.map((item, index) => (
          <div className="border rounded-md">
            <div 
              onClick={() => toggle(index)}
              key={index}
              className="w-full h-auto overflow-y-hidden px-4 cursor-pointer  flex justify-between items-center bg-gradient-to-r from-black to-purple-800  border"
            >
              <div className="">
                <p className="w-full py-2 px-4 text-gray-200 flex items-center font-medium  text:sm md:text-lg cursor-pointer">
                  {item.quest}
                </p>
              </div>
              <div className="">
                {<span className="text-2xl text-white cursor-pointer">{clicked === index ? <FiMinus /> : <FiPlus />}</span>}
              </div>
            </div>
            {clicked === index ? <p className=" px-4 py-2 text-xl">{item.ans}</p> : null}
           
          </div>
        ))}
      </div>
    </div>
  );
}
