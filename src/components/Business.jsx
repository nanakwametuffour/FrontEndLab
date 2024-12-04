import React from 'react'
import img from '../assets/man1.PNG'
export default function Business() {
  return (
    <div className="w-full h-auto py-5 px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center">
        <div className="flex flex-col w-full h-auto gap-5">
          <h1 className=" text-4xl font-medium">
            Did you know? Having a website isn't enough for your business.
          </h1>
          <p className="text-xl text-justify font-medium">
            At{" "}
            <span className="text-base text-purple-800 font-semibold">
              FrontEndLad{" "}
            </span>
            Technology, we understand that having a website is not just about a
            bunch of code with graphics on the web. It's about creating a
            valuable digital space where visitors can interact with your goods
            and services, ultimately becoming your consumers. As a leading
            website design and development company, we offer cost-effective,
            top-notch, end-to-end solutions for all your web development needs.
            We take pride in our highly qualified and specialized team of
            developers in JavaScript, Reactjs, Nodejs, TypeScript,
            Redux-toolkit, Tailwindcss, HTML5, CSS3, Joomla, and WordPress. Our
            team is dedicated to helping you overcome any roadblocks and
            maximize your business exposure.
          </p>
          <p className="text-xl text-justify font-medium">
            We understand that in today's digital world, the presence of a
            website is crucial for small and large businesses in every industry.
            That's why we are committed to providing professional and customized
            web development solutions to our clients. If you have any questions
            or doubts about your web development needs, do not hesitate to
            contact us. We are always ready to assist you.
          </p>
        </div>
        <div className="w-full flex items-center">
            <img src={img} alt="" className='w-full h-auto object-cover'/>
        </div>
      </div>
    </div>
  );
}
