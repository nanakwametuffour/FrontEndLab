import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function SideBar() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "afcf4fe3-656d-427c-8303-1d322a6af46b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };
  return (
    <div className="w-full h-[94%] flex flex-col gap-5 px-5">
      <div className="text-white flex flex-col w-full justify-center items-center">
        <p className="text-4xl font-semibold">Got a Question</p>
        <p className="text-white font-medium text-lg">
          We are always ready to assist you!
        </p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="text"
          required
          placeholder="Your Full Name"
          className="rounded-lg p-2 placeholder:px-3 outline-none border border-purple-600 py-4"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email Address"
          className="rounded-lg p-2 placeholder:px-3 outline-none border border-purple-600 py-4"
        />
        <input
          type="text"
          name="number"
          required
          placeholder="Your Phone Number"
          className="rounded-lg p-2 placeholder:px-3 outline-none border border-purple-600 py-4"
        />
        <select
          cl
          name="select"
          required
          id=""
          className="border-none rounded-lg py-4  w-full px-4 text-gray-700"
        >
          <option value="" name="project" className="font-light text-base">
            Select Service
          </option>
          <option value="" name="project" className="font-light text-base">
            Web Development
          </option>
          <option value="" name="project" className="font-light text-base">
            eCommeerce Solutions
          </option>
          <option value="" name="project" className="font-light text-base">
            Mobile App Development
          </option>
          <option value="" name="project" className="font-light text-base">
            Digital Marketing
          </option>
          <option value="" name="project" className="font-light text-base">
            UI/UX Design
          </option>
          <option value="" name="project" className="font-light text-base">
            Graphics Design
          </option>
          <option value="" name="project" className="font-light text-base">
            Others
          </option>
        </select>
        <textarea
          name="message"
          id=""
          required
          placeholder="Brief Your Projects "
          className="rounded-lg p-2 placeholder:px-3 outline-none border-transparent"
        ></textarea>
        {result ? (
          <span className="py-5 text-green-500 w-full">{result}</span>
        ) : (
          <button
            type="submit"
            className="border  w-full text-purple-500 border-purple-400 active:bg-purple-500 font-light text-2xl rounded-lg flex justify-center py-3 items-center gap-3"
          >
            <span>Submit</span>
            <FaArrowRight />
          </button>
        )}
      </form>
    </div>
  );
}
