import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <>
      {/*/////////////////////////////////////
    /////////// Hero information   ///////////
    //////////////////////////////////////*/}
      <div
        id="hero"
        className="hero_bg overflow-hidden h-screen relative flex justify-center items-center text-white pt-20 "
      >
        <div className="container max-w-5xl px-10  flex flex-col gap-8  m-auto">
          <h3 className="text-3xl md:text-5xl">Hello,</h3>
          <h1 className="text-5xl md:text-7xl">
            I am <span className="text-[#39b54a]">Dev</span>,
          </h1>
          <h2 className="text-3xl  sm:text-4xl md:text-6xl">
            Front End Developer
          </h2>
          <p className="sm:text-2xl text-gray-400">
            Currently located in Bangladesh. I love building
            <span className="text-[#39b54a]"> interactive</span>, digital
            experiences on the web.
          </p>

          <div className="flex  items-start gap-3">
            <button className="py-2 px-7 text-sm md:text-base md:py-3 md:px-8 border border-[#39b54a] hover:bg-[#39b54a] duration-500 transition-all">
              Start a project
            </button>
            <button className="py-2 px-7 text-sm md:text-base  md:py-3 md:px-8 border border-[#39b54a] hover:bg-[#39b54a] duration-500 transition-all">
              More about me
            </button>
          </div>
        </div>

        {/*/////////////////////////////////////
    ///////////// Welcome text   /////////////
    //////////////////////////////////////*/}
        <div className="absolute bottom-[-103px] -right-6 text-green-200 hidden md:flex">
          <p className="md:text-[200px] opacity-20 font-bold ">Welcome</p>
        </div>

        {/*/////////////////////////////////////
    ///////////// Social icons   //////////////
    //////////////////////////////////////*/}
        <div className=" md:flex flex-col mr-20 text-gray-300 hidden gap-5 justify-evenly items-center mt-12">
          <a
            href="https://www.linkedin.com/in/devdashk66/"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-white hover:border-[#39b54a] cursor-pointer duration-500 transition-all  border-white p-2 border-2 rounded-full "
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/devdashk66"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-white hover:border-[#39b54a] cursor-pointer duration-500 transition-all border-white p-2 border-2 rounded-full"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/devdashk66"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-white hover:border-[#39b54a] cursor-pointer duration-500 transition-all border-white  p-2 border-2 rounded-full"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/devdashk66"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-white hover:border-[#39b54a] cursor-pointer duration-500 transition-all border-white p-2 border-2 rounded-full"
          >
            <FaInstagram />
          </a>

          <a
            href="https://dribbble.com/devdashk"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-white hover:border-[#39b54a] cursor-pointer duration-500 transition-all border-white p-2 border-2 rounded-full"
          >
            <FaDribbble />
          </a>
        </div>

        {/*/////////////////////////////////////
        ////////////// Scroll down   ////////////
         //////////////////////////////////////*/}
        <div className="absolute -bottom-5 left-50 sm:hidden w-20">
          <Image
            src="/images/gif-arrow.gif"
            width={80}
            height={80}
            alt="scroll down"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
