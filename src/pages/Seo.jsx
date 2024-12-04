import React from "react";
import seo from '../assets/seo.jpg'
export default function Seo() {
  return (
    <div className="w-full  relative">
      <div className="w-full h-full">
        <div className="w-full h-full seoBK bg-center bg-cover py-10 relative">
          <div className="max-w-screen-xl bg-black bg-opacity-80 mx-auto relative py-10 lgl:py-16 px-6">
            <div className="w-full h-full flex items-center gap-6">
              <div className="w-full lgl:w-1/2 h-full flex flex-col justify-between">
                <h1
                  className="text-zinc-300 uppercase text-2xl font-medium"
                  style={{ opacity: 1 }}
                >
                  <span className="text-purple-900  hover:underline underline-offset-2 duration-200">
                    Home{" "}
                  </span>
                  / Seo Services
                </h1>
                <div style={{ opacity: 1 }}>
                  <h1 className="text-[200px] font-extrabold text-purple-900">S</h1>
                  <div className="-mt-[106px] md:-mt-[111px]">
                    <h2 className="text-3xl md:text-[40px] text-white font-semibold">
                      SEO services
                    </h2>
                    <p className="max-w-[600px] text-base text-zinc-200">
                      We are a top-notch web development company that can help
                      you define your brand and increase your revenue.
                      Full-Stack Web Development Services.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col md:flex-row ml-2 mt-16 items-start md:items-center gap-10 z-50"
                  style={{ opacity: 1 }}
                >
                  <a href="/order">
                    <div className="w-48 h-12 bg-gradient-to-r from-black to-purple-800 relative group">
                      <button className="w-48 h-12 bg-purple-950 text-black font-titleFont font-semibold text-lg absolute -translate-x-2 -translate-y-2 transform group-hover:bg-reactYellow group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                        Marketing
                      </button>
                    </div>
                  </a>
                  <a href="/order">
                    <div className="w-48 h-12 bg-gradient-to-r from-black to-purple-800 relative group">
                      <button className="w-48 h-12 bg-purple-950 text-black font-titleFont font-semibold text-lg absolute -translate-x-2 -translate-y-2 transform group-hover:bg-reactYellow group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                        Coporate
                      </button>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden w-full lg:inline-flex relative">
                <img
                  src={seo}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black py-20 flex flex-col lg:flex-row gap-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col  gap-4">
            <h1 className="text-3xl text-white font-medium underline underline-offset-8 decoration-[1px] decoration-purple-600">
              Clean coding principles
            </h1>
            <p className="text-base tracking-wide text-white">
              Experienced senior web developers with more than 10 years of
              experience with projects done for clients across the world can
              make your every web development dream come true.
            </p>
            <ul className="flex flex-col gap-2">
              <li class="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span class="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Valid code
              </li>
              <li class="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span class="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Fast loading time
              </li>
              <li class="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span class="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Bug-free
              </li>
              <li class="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span class="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                User-friendly
              </li>
              <li class="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span class="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                SEO-friendly
              </li>
            </ul>
            <p className="text-wrap text-white">
              We work in line with the latest trends in new technologies and
              responsive design. We are always active participants at
              international web technologies conferences.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                HTML5, CSS3, Tailwindcss Sass, Bootstrap, GraphQL
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                JavaScript, React.js, Next.js, Ract Native
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Nodejs, MongoDB, Express.js, Firebase, Sanity.io
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Figma, Adobe, Canva
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Vercel, Netlify, Back4App
              </li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <h1 className="text-3xl text-white font-medium underline underline-offset-8 decoration-[1px] decoration-purple-600">
              Project management methodology for success
            </h1>
            <p className="text-base tracking-wide text-white">
              Web developers from PopArt Studio team consists of work in line
              with methodology that results in the best performance. That is why
              we are proud of:
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Precise task allocation
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Narrow specialization
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
                Each project or task has our QA engineers’ approval
              </li>
              <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
                <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
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
