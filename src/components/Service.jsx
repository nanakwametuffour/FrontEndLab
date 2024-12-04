import { FaServicestack } from "react-icons/fa6";
import { workData } from "../assets/caruselData";
import { useState } from "react";
import { p } from "framer-motion/client";
import { Link } from "react-router-dom";

export default function Service() {
  const [vieMore, setViewMore] = useState(true);
  const [project, setProjects] = useState(workData);
  const showProject = (category) => {
    setProjects(
      project.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="py-10 w-full text-white h-auto">
      <div className="flex flex-col w-full h-auto gap-10 justify-center relative p-5 ">
        <div className="flex items-center text-3xl font-semibold gap-4 ">
          <h1>my services</h1>
          <FaServicestack className="text-purple-400 animate-pulse" />
        </div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
          {project?.map((work) => (
            <div
              key={work.id}
              className="w-ful  bg-[#1b1919]/70 border-4 border-purple-400 rounded-lg hover:border-transparent cursor-pointer hover:rounded-none duration-300"
            >
              <div className="flex flex-col group w-full h-auto py-5 gap-8 group px-4">
                <div className="flex flex-col gap-7 justify-start px-4 w-full">
                  <h1>{work.name}</h1>
                  <p>{work.des}</p>
                </div>
                  <Link to={`/viewmore/${work.id}`} className="flex items-center w-[140px] gap-2 relative overflow-hidden group px-3">
                    <button
                      className=" w-full h-full
                  md:left-0 md:-translate-x-[100%]
                  md:group-hover:-translate-x-[17%] transition-transform
                  duration-700 text-purple-400 whitespace-nowrap"
                    >
                      {work.category}
                    </button>
                    <div className=" bg-purple-300 w-[40px] lg:w-full h-[2px] inline-flex absolute bottom-0 -right-2 md:left-0 top-[50%] translate-y-[50%] md:translate-y-[60%] lg:-translate-x-[70%] md:group-hover:translate-x-[98px] transition-transform duration-700"></div>
                  </Link>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
