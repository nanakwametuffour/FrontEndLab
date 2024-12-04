import React from 'react'
import img from '../assets/man1.PNG'
import { portfolio, projects } from '../assets/caruselData';
 
export default function Portfolio() {
  return (
    <div className="w-full  h-auto py-5 bg-[#121212] px-4">
      <div className="max-w-6xl mx-auto">

      <h1 className="text-3xl py-10 uppercase font-medium tracking-wide text-white text-center">
        OUR WEBSITE DEVELOPMENT PORTFOLIO
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="w-full h-auto border-[1px] border-gray-600 hover:border-purple-700 border-opacity-30 hover:border-opacity-10"
          >
            <div className="w-full h-80 flex flex-col group overflow-hidden">
              <div className=" overflow-hidden relative">
                <a href={item.link}>
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[1300px] object-cover cursor-pointer top-0 -translate-y-[0] group-hover:-translate-y-[950px] transition-translate transition-ease-in duration-[5s]"
                  />
                  <span className="w-1 h-8 bg-purple-700 inline-block absolute top-0 left-0  transition-translate duration-500 -translate-x-1 group-hover:-translate-x-0"></span>
                  <span className="w-1 h-8 bg-purple-700 inline-block absolute bottom-0 left-0  transition-translate duration-500 -translate-x-1 group-hover:-translate-x-0"></span>
                  <span className="w-1 h-8 bg-purple-700 inline-block absolute bottom-0 right-0  transition-translate duration-500 translate-x-2 group-hover:translate-x-0"></span>
                  <span className="w-1 h-8 bg-purple-700 inline-block absolute top-0 right-0  transition-translate duration-500 translate-x-1 group-hover:translate-x-0"></span>
                  <span className="w-8 h-1 bg-purple-700 inline-block absolute top-0 right-0  transition-translate duration-500 -translate-y-1 group-hover:-translate-y-0"></span>
                  <span class="w-8 h-1 bg-purple-700 inline-block absolute top-0 left-0  transition-translate duration-500 -translate-y-1 group-hover:-translate-y-0"></span>
                  <span className="w-8 h-1 bg-purple-700 inline-block absolute bottom-0 left-0  transition-translate duration-500 translate-y-1 group-hover:translate-y-0"></span>
                  <span className="w-8 h-1 bg-purple-700 inline-block absolute bottom-0 right-0  transition-translate duration-500 translate-y-1 group-hover:translate-y-0"></span>
                </a>
              </div>
              <div className="">
                <p className=" overflow-hidden text-sm text-[#737373] h-7 w-full px-2 py-1 mt-4 relative font-normal group-hover:text-white duration-500 cursor-pointer">
                  MyEdgeCode English Learning Academy
                  <span className="w-[1px] h-2 bg-[#737373] inline-block absolute bottom-0 left-0 -translate-x-[.5px] group-hover:bg-purple-700 group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="w-full h-[1px] bg-[#737373] inline-block absolute bottom-0 left-0 translate-y-[.5px] group-hover:bg-purple-700 group-hover:translate-y-0 transition-transform duration-500"></span>
                </p>
              </div>
            </div>
             <div className=" p-2">
              <p className='text-purple-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo 
                quaerat nulla perspiciatis consectetur quisquam vitae in inventore. 
                </p>
             </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
