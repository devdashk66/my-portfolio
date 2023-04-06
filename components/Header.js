import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [toggle, seToggle] = useState(false);

  return (
    <header className=" fixed w-full z-50 top-0 glassEffect  border-b-[.5px]  border-[#39b54a86] text-white py-5 px-4">
      <nav className="container m-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link href="/">
            Dev<span className="text-[#39b54a]">.</span>
          </Link>
        </div>
        <button onClick={() => seToggle(!toggle)}>
          <div className="flex items-center justify-center gap-3">
            <p className=" text-[#39b54a] text-sm hover:text-white transition-all duration-500 tracking-widest uppercase font-bold ">
              Menu
            </p>
            <FaBars title="Show Menu" className="text-3xl font-bold" />
          </div>
        </button>
      </nav>

      {/*/////////////////////////////////////
    /////////////  Nav Menu   //////////////
    //////////////////////////////////////*/}
      <div className="fixed   h-screen top-0 right-0 bg-transparent">
        {toggle && (
          <div
            onClick={() => seToggle(!toggle)}
            className="fixed w-screen  h-screen top-0 right-0 bg-[#00000033]"
          ></div>
        )}
        <div
          className={`fixed top-0 ${
            toggle ? "right-0 opacity-1" : "-right-80 opacity-0"
          } h-screen bg-[#0C0C0C] py-6 px-8 w-72 transition-all duration-700`}
        >
          {/* ////// */}
          <div
            className={`${
              toggle ? "ml-0 opacity-1" : "ml-16 opacity-0"
            }  transition-all duration-500 delay-500 bg-red`}
          >
            <div className="flex justify-between items-center mb-16">
              <p className="uppercase text-[#39b54a] tracking-widest text-sm">
                Navigation
              </p>
              <RxCrossCircled
                title="Hide Menu"
                onClick={() => seToggle(!toggle)}
                className="text-2xl cursor-pointer hover:text-red-500 duration-500 transition-all"
              />
            </div>
            <ul className="text-xl flex flex-col gap-4">
              <li>
                <Link onClick={() => seToggle(!toggle)} href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link onClick={() => seToggle(!toggle)} href="#about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => seToggle(!toggle)} href="#services">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={() => seToggle(!toggle)} href="#works">
                  Works
                </Link>
              </li>
              <li>
                <Link onClick={() => seToggle(!toggle)} href="#clients">
                  Clients
                </Link>
              </li>
              <li>
                <Link onClick={() => seToggle(!toggle)} href="#contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-16 w-56  text-sm leading-7 text-gray-500">
              <p>
                They do not know what is present here. And I will not go further
                from the pleasure of pain, for I am free to follow the truth. It
                is just that he accepts the truth and does not criticize.
              </p>

              <div className=" flex justify-evenly items-center mt-12">
                <a
                  href="https://www.linkedin.com/in/devdashk66/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-white cursor-pointer duration-500 transition-all"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/devdashk66"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-white cursor-pointer duration-500 transition-all"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/devdashk66"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-white cursor-pointer duration-500 transition-all"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/dev_k66"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-white cursor-pointer duration-500 transition-all"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://dribbble.com/devdashk"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-white cursor-pointer duration-500 transition-all"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
