import React from "react";

export default function Contact() {
  return (
    <div className="w-full h-auto bg-purple-950 px-4 py-4 lg:py-6">
      <div className="max-w-screen-xl mx-auto h-full bg-black opacity-80 flex flex-col  gap-10 p-4 lg:p-10 rounded-md">
        <div className="w-full   flex flex-col gap-6 justify-center items-center">
          <p className="text-4xl font-semibold text-white">Get in touch!</p>
          <p className="text-xl md:text-3xl font-semibold bg-clip-text bg-gradient-to-r from-black via-purple-600 to-purple-950 text-transparent">
            Let's talk about your project
          </p>
          <p className=" text-base text-gray-300 font-medium">
            Thinking about a new project, a problem to solve, or just want to
            connect? Let's do it!
          </p>
          <p className="font-bodyFont text-base text-gray-300 font-medium">
            Use the form on this page or get in touch by other means.
          </p>
        </div>
        <div className="w-full h-auto max-w-6xl mx-auto border-[1px] border-purple-950">
          <div className="bg-gradient-to-r from-black  to-purple-950 w-full">
            <div className="w-full h-auto text-center py-3 text-2xl">
              <h1 className="text-white">Your contact information</h1>
            </div>
          </div>
          <div className="w-full  py-5 flex flex-col gap-2 lg:gap-4">
            <form className="w-full flex flex-col  justify-center items-center gap-2">
              <div className="w-full flex flex-col lg:flex-row gap-2 px-4">
                <div className="w-full border-b border-purple-950 hover:border-purple-600">
                  <input
                    type="text"
                    name="text"
                    required
                    className="w-full bg-transparent text-white px-4 p-2 placeholder:px-3 ring-0 focus:ring-0 shadow  focus:outline-none"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full border-b border-purple-950 hover:border-purple-600">
                  <input
                    type="text"
                    name="text"
                    required
                    className="w-full bg-transparent text-white px-4 p-2 placeholder:px-3 ring-0 focus:ring-0 shadow  focus:outline-none"
                    placeholder="Last name"
                  />
                </div>
                <div className="w-full border-b border-purple-950 hover:border-purple-600">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent text-white px-4 p-2 placeholder:px-3 ring-0 focus:ring-0 shadow  focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-2 px-4">
                <div className="w-full border-b border-purple-950 hover:border-purple-600">
                  <input
                    type="text"
                    name="text"
                    required
                    className="w-full bg-transparent text-white px-4 p-2 placeholder:px-3 ring-0 focus:ring-0 shadow  focus:outline-none"
                    placeholder="Phone number"
                  />
                </div>
                <div className="w-full border-b border-purple-950 hover:border-purple-600">
                  <input
                    type="text"
                    name="text"
                    required
                    className="w-full bg-transparent text-white px-4 p-2 placeholder:px-3 ring-0 focus:ring-0 shadow  focus:outline-none"
                    placeholder="Company name"
                  />
                </div>
                <div className="w-full border-b border-purple-950 hover:border-purple-600">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent text-white px-4 p-2 placeholder:px-3 ring-0 focus:ring-0 shadow  focus:outline-none"
                    placeholder="Zip code"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-black  to-purple-950 w-full py-5 mt-5 px-4">
                <h1 className="text-zinc-200 tracking-wide text-center">
                  What services do you need for your project?
                </h1>
              </div>
              <div className="w-full px-4 py-5 flex flex-col gap-4">
                <div className="flex w-full justify-center flex-col xl:flex-row  items-center gap-4 px-4">
                  <div className="w-full flex   items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">Website Development</p>
                  </div>
                  <div className="w-full flex   items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-purple-600 cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">Website Migration</p>
                  </div>
                  <div className="w-full flex   items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">E-commerce website</p>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row  items-center gap-4 px-4">
                  <div className="w-full flex j  items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">App Development</p>
                  </div>
                  <div className="w-full flex  items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">Domain/Hosting</p>
                  </div>
                  <div className="w-full flex  items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">SEO Solutions</p>
                  </div>
                </div>
                <div className="flex w-full flex-col xl:flex-row  items-center gap-4 px-4">
                  <div className="w-full flex  items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">Website Design</p>
                  </div>
                  <div className="w-full flex  items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">UI/UX Design</p>
                  </div>
                  <div className="w-full flex  items-center gap-2 text-base">
                    <input
                      className="w-6 h-6 bg-zinc-200 accent-reactYellow cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-white">Graphic Designs</p>
                  </div>
                </div>
              </div>
              <h2 className="text-lg w-full text-center text-zinc-200 tracking-wide bg-gradient-to-r from-black  to-purple-950 p-4">
                How much is the anticipated budget?
              </h2>
              <div className="px-4 w-full py-5 flex flex-col xl:flex-row items-center justify-between gap-4">
                <div class="w-full flex items-center gap-2 text-base justify-center">
                  <input
                    type="radio"
                    class="w-5 h-5 bg-zinc-200 cursor-pointer accent-reactYellow rounded-full"
                    value="less than $1,000"
                  />
                  <p className="text-zinc-200">Less than $1,000</p>
                </div>
                <div class="w-full flex items-center gap-2 text-base justify-center">
                  <input
                    type="radio"
                    class="w-5 h-5 bg-zinc-200 cursor-pointer accent-reactYellow rounded-full"
                  />
                  <p className="text-zinc-200">$2,000 - $5000</p>
                </div>
                <div class="w-full flex items-center gap-2 text-base justify-center">
                  <input
                    type="radio"
                    class="w-5 h-5 bg-zinc-200 cursor-pointer accent-reactYellow rounded-full"
                  />
                  <p className="text-zinc-200">More than $5,000</p>
                </div>
              </div>
              <h2 className="text-lg text-center w-full text-zinc-200 tracking-wide bg-gradient-to-r from-black to-purple-950 p-4">
                Tell me about your project
              </h2>
              <div className="w-full px-4  lg:px-20 py-5 ">
                <textarea
                  rows="4"
                  className="w-full bg-gradient-to-r from-black to-purple-950 resize-none p-2 placeholder:text-zinc-300 text-zinc-200 text-base outline-none rounded-md"
                  placeholder="Project description"
                ></textarea>
              </div>
              <div className="px-6 pt-4 pb-6">
                <div className="w-48 h-12 bg-gradient-to-r from-black to-purple-950 relative group">
                  <button type="submit" className="w-48 h-12 bg-purple-900 text-black  font-semibold text-lg absolute -translate-x-2 -translate-y-2 transform group-hover:bg-purple-900 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
