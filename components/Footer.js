import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="flex flex-col overflow-scroll hidescroll h-screen bg-[#000000]">
      <div className="footer py-36 flex justify-center items-center flex-col gap-8">
        <h2 className="text-2xl text-gray-200">Ready to Get Started?</h2>
        <button className="py-2 px-4 bg-gray-200 rounded-full">
          Get a free consultation now
        </button>
      </div>

      <div className="bg-[#121212] text-white py-6">
        <div className="container m-auto px-4 py-10 md:flex md:justify-between md:items-start md:gap-10">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Dev.</h2>
            <p className="text-gray-500 text-lg">
              As a React front-end developer, I specialize in creating modern
              and responsive user interfaces for web applications. I have a
              strong understanding of React + Next.js and its core principles,
              including component-based architecture, state management, and
              declarative programming.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Get Notified</h2>
            <p className="text-gray-500 mb-4">
              Subscribe to my newsletter and get updates on my latest projects
              and blog posts.
            </p>
            <div className="flex flex-col md:flex-row">
              <input
                className="bg-gray-900 rounded-l-lg px-4 py-2 md:flex-1 md:mr-2 mb-2 md:mb-0"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-[#39b54a] hover:bg-[#27a137] transition-all duration-300 rounded-r-lg px-4 py-2 text-white font-bold text-lg  md:w-auto">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-2 bg-[#000000] flex justify-center text-white">
        <h2 className="">Copyright © {year} All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
