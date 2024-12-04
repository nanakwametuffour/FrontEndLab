import React from 'react'

export default function AboutUs() {
  return (
    <div className="w-full py-10">
      <div className="w-full py-10 h-auto aboutImg bg-no-repeat bg-cover bg-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl text-center font-medium">
            We've helped businesses increase their revenue on an average by 90%
            in their first year with us!
          </h1>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row lg:flex-row items-center gap-10 mt-16">
            <div className="w-full bg-purple-900 group">
              <div className="w-full bg-gradient-to-r from-black to-purple-950 hover:bg-purple-950 border-[2px] border-purple-500 flex flex-col gap-2 items-center justify-center py-8 transform -translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all ease-in-out duration-500 group-hover:border-purple-600">
                <h1 className="text-6xl  font-semibold">100</h1>
                <p className="text-lg font-medium">
                  Satisfied Clients Across the Globe
                </p>
              </div>
            </div>
            <div className="w-full bg-purple-900 hover:bg-transparent group">
              <div className="w-full bg-gradient-to-r from-black to-purple-950 hover:bg-purple-950 border-[2px] border-purple-500 flex flex-col gap-2 items-center justify-center py-8 transform -translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all ease-in-out duration-500 group-hover:border-purple-600">
                <h1 className="text-6xl font-titleFont font-semibold">250</h1>
                <p className="text-lg font-medium">
                  Projects Delivered Successfully
                </p>
              </div>
            </div>
            <div className="w-full bg-purple-900 group">
              <div className="w-full bg-gradient-to-r from-black to-purple-950 hover:bg-purple-950 border-[2px] border-purple-500 flex flex-col gap-2 items-center justify-center py-8 transform -translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all ease-in-out duration-500 group-hover:border-purple-600">
                <h1 className="text-6xl font-titleFont font-semibold">20</h1>
                <p className="text-lg font-medium">Experts Under the Same Roof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
