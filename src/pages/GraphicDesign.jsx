import React from "react";
 import design from '../assets/design.jpg'
export default function GraphicDesign() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full graphic bg-center bg-cover py-10 relative">
        <div className="max-w-screen-xl bg-black opacity-80 mx-auto relative py-10 lgl:py-16 px-6">
          <div className="w-full h-full flex flex-col md:flex-row lg:flex-row items-center gap-6">
            <div className="w-full lgl:w-1/2 h-full flex flex-col justify-between">
              <h1
                className="text-white uppercase text-2xl font-medium"
                style={{ opacity: 1 }}
              >
                <span className="text-purple-600 hover:underline underline-offset-2 duration-200">
                  Home{" "}
                </span>
                / Graphic Design Services
              </h1>
              <div style={{ opacity: 1 }}>
                <h1 className="text-[200px] t font-extrabold text-purple-600">
                  G
                </h1>
                <div className="-mt-[106px] md:-mt-[111px]">
                  <h2 className="text-3xl md:text-[40px] text-white font-semibold">
                    Graphic Design
                  </h2>
                  <p className="max-w-[600px] text-base text-white">
                    We listen carefully, develop strategy and deliver graphic
                    design which changes the way we do business with and for our
                    clients.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row ml-2 mt-16 items-start md:items-center gap-10 z-50"
                style={{ opacity: 1 }}
              >
                <a href="/order">
                  <div className="w-48 h-12 bg-gradient-to-r from-black to-purple-800 relative group">
                    <button className="w-48 h-12 bg-purple-900 text-black  font-semibold text-lg absolute -translate-x-2 -translate-y-2 transform group-hover:bg-reactYellow group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                       Office cards
                    </button>
                  </div>
                </a>
                <a href="/order">
                  <div className="w-48 h-12 bg-gradient-to-r from-black to-purple-800 relative group">
                    <button className="w-48 h-12 bg-purple-900 text-black  font-semibold text-lg absolute -translate-x-2 -translate-y-2 transform group-hover:bg-reactYellow group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                      Online business
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <div className=" w-full h-auto">
              <img src={design} alt="" className="w-full h-full object-cover hover:scale-105 duration-300"/>
            </div>
          </div>
          
        </div>
      </div>
      <div className="w-full bg-black py-20 flex flex-col lg:flex-row gap-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h1 className="text-3xl text-white font-medium underline underline-offset-8 decoration-[1px] decoration-purple-600">
            FrontEndLab professional web designing services ensure an online
            presence that is:
          </h1>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              custom-designed to meet the needs of your brand, industry, and
              customers
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              responsive or completely designed for mobile devices (mobile-first
              design)
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              created in accordance with all of the SEO optimization guidelines
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              designed following the conversion rate optimization principles
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              Content Management System (CMS)
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              research and writing of optimized site content
            </li>
          </ul>
          <p className="text-white">
            Our web design company offers professional web design services
            tailored to the needs of your business and clients. A wide spectrum
            of the web designing services we offer is completely adapted to your
            goals in order to get you a digital product that suits your needs,
            budget, and ambitions.
          </p>
          <p className="text-white">
            Besides the custom-made web design, ReactBD Studio offers a range of
            complementary services that will improve the success and
            profitability of your site:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-zinc-300 font-medium f hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              design created using superb technology and superior tools
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium f hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              on-brand custom-made UI and UX design creation with unique code
              and top performance on all devices
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium f hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              integration of eCommerce functionalities
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium f hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              Content Management System (CMS)
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium f hover:text-white duration-300 group">
              <span className="w-3 h-3 rounded-full inline-flex bg-purple-600 group-hover:bg-purple-900 duration-300"></span>
              research and writing of optimized site content
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h1 className="text-3xl text-white font-medium underline underline-offset-8 decoration-[1px] decoration-purple-600">
            Web design for mobile platforms - Responsive and Mobile-first web
            design
          </h1>
          <p className="text-base tracking-wide text-white">
            Web developers from PopArt Studio team consists of work in line with
            methodology that results in the best performance. That is why we are
            proud of:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              More than half of Internet traffic comes from mobile phones and
              their share in the number of transactions and online shopping
              profit is just slightly smaller.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              As a web design agency, we understand the importance of creating a
              site that is not only aesthetically pleasing but also functional
              and available to all users. With the increasing number of mobile
              devices and a larger number of people accessing the internet
              through their smartphones, web design for mobile devices has
              become more important than ever.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
              Therefore, we offer our clients the services of responsive web
              design and mobile-first design, during which we create a design
              for the pages whose look and content are automatically adjusted to
              the screen of the device.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium  hover:text-white duration-300 group">
              Responsive web design implies the design of a page whose interface
              is adapted to the look of the device and window size, facilitating
              usability, navigation, and user satisfaction. In mobile-first
              design, designers begin the design process with the layout for
              mobile devices.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium f hover:text-white duration-300 group">
              Our web designers have many years of experience in responsive and
              mobile-first web design. We use the newest technology and best
              practice to ensure that your page fits all devices and offers an
              extraordinary user experience.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
              The role of responsive web design is the key to the success of an
              online business. Web design adapted to mobile devices
              significantly contributes to the improvement of user experience,
              performance upgrades, a boost in search ranking, and an increase
              in organic conversions.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
              The improved user experience of the design for mobile devices
              implies that the users will be able to move through your page and
              access its full content without the need for zooming or horizontal
              moving of the page.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
              Besides the users, internet search engines, like Google, take into
              account the mobile device adaptability of the site when ranking a
              site in search results. Besides that, responsive design saves your
              time and resources long term, because it removes the need for
              owning separate pages for different devices.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
              Contact us today to find out more about how we can help you create
              a responsive page that satisfies the needs of your business.
            </li>
            <li className="flex items-center gap-2 text-zinc-300 font-medium font-titleFont hover:text-white duration-300 group">
              More than half of Internet traffic comes from mobile phones and
              their share in the number of transactions and online shopping
              profit is just slightly smaller.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
