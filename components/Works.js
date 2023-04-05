import React, { useState } from "react";
import PageHeading from "./Helper/PageHeading";
import Image from "next/image";
import Link from "next/link";
import { BsEyeFill, BsLink45Deg } from "react-icons/bs";

const Works = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="works" id="works">
      <div className="container pt-24 h-screen  px-10 m-auto overflow-scroll hidescroll">
        <PageHeading
          title="RECENT WORKS"
          text="I love what I do, check out some of my latest works"
          color="text-gray-200"
        />
        {/* /////////////////////////////////////////////////////////// */}

        <div className=" flex flex-wrap justify-center gap-1 md:mx-24 my-12">
          <div className=" relative  overflow-hidden w-[500px] md:w-[48%] h-[500px]">
            <Image
              src="/images/works1.png"
              alt="Image 1"
              width={1500}
              height={1500}
              className="w-full h-full lg:object-top object-cover "
            />

            {/* ////////////////////////////////////
                            Hover effect
            //////////////////////////////////////*/}
            <div
              className={`workHover w-full h-full transition-all duration-500 absolute top-0 right-0 text-white`}
            >
              <p className="hoverLink absolute top-10 left-10 flex flex-col justify-center items-center">
                <b className="border border-b border-gray-300 w-10 rotate-90  "></b>
                <Link
                  target="_blank"
                  href="https://unsplash-clone-with-react.netlify.app/"
                >
                  <BsLink45Deg
                    title="Project Link"
                    className="border border-gray-200 rounded-full p-2 mt-5 text-4xl hover:bg-white hover:text-gray-900 transition-all duration-300 "
                  />
                </Link>
              </p>

              <Link
                title="View Project"
                target="_blank"
                href="https://unsplash-clone-with-react.netlify.app/"
              >
                <BsEyeFill className="hoverEye text-2xl hover:text-[#39b54a] transition-all duration-300" />
              </Link>
              <div className="hoverTitle font-bold text-lg">
                <p>Unsplash Clone</p>
                <p className="text-xs text-gray-300">
                  Unsplash is a website dedicated to proprietary stock
                  photography
                </p>
              </div>
            </div>
            {/* ///////hover end////// */}
          </div>

          <div className=" relative  overflow-hidden w-[500px] md:w-[48%] h-[500px] md:h-[700px]">
            <Image
              src="/images/works2.png"
              alt="Image 2"
              width={1500}
              height={1500}
              className="w-full h-full lg:object-top object-cover"
            />
            {/* ////////////////////////////////////
                            Hover effect
            //////////////////////////////////////*/}
            <div
              className={`workHover w-full h-full transition-all duration-500 absolute top-0 right-0 text-white`}
            >
              <p className="hoverLink absolute top-10 left-10 flex flex-col justify-center items-center">
                <b className="border border-b border-gray-300 w-10 rotate-90  "></b>
                <Link
                  target="_blank"
                  href="https://virtue-agency-react-app.netlify.app/"
                >
                  <BsLink45Deg
                    title="Project Link"
                    className="border border-gray-200 rounded-full p-2 mt-5 text-4xl hover:bg-white hover:text-gray-900 transition-all duration-300 "
                  />
                </Link>
              </p>

              <Link
                title="View Project"
                target="_blank"
                href="https://virtue-agency-react-app.netlify.app/"
              >
                <BsEyeFill className="hoverEye text-2xl hover:text-[#39b54a] transition-all duration-300" />
              </Link>
              <div className="hoverTitle font-bold text-lg">
                <p>Virtue Agency</p>
                <p className="text-xs text-gray-300">
                  Elevating your brand to the next level with innovative design
                  and strategy.
                </p>
              </div>
            </div>
            {/* ///////hover end////// */}
          </div>

          <div className=" relative  overflow-hidden w-[500px] h-[500px] md:w-[48%] lg:-mt-[200px] md:-mt-[200px]">
            <Image
              src="/images/works3.png"
              alt="Image 1"
              width={1500}
              height={1500}
              className="w-full h-full lg:object-top object-cover"
            />
            {/* ////////////////////////////////////
              Hover effect
//////////////////////////////////////*/}
            <div
              className={`workHover w-full h-full transition-all duration-500 absolute top-0 right-0 text-white`}
            >
              <p className="hoverLink absolute top-10 left-10 flex flex-col justify-center items-center">
                <b className="border border-b border-gray-300 w-10 rotate-90  "></b>
                <Link
                  target="_blank"
                  href="https://netflix-clone-with-react-ncr.netlify.app/"
                >
                  <BsLink45Deg
                    title="Project Link"
                    className="border border-gray-200 rounded-full p-2 mt-5 text-4xl hover:bg-white hover:text-gray-900 transition-all duration-300 "
                  />
                </Link>
              </p>

              <Link
                title="View Project"
                target="_blank"
                href="https://netflix-clone-with-react-ncr.netlify.app/"
              >
                <BsEyeFill className="hoverEye text-2xl hover:text-[#39b54a] transition-all duration-300" />
              </Link>
              <div className="hoverTitle font-bold text-lg">
                <p>Netflix Clone</p>
                <p className="text-xs text-gray-300">
                  Unlimited entertainment at your fingertips with Netflix
                </p>
              </div>
            </div>
            {/* ///////hover end////// */}
          </div>

          <div className=" relative  overflow-hidden w-[500px] h-[500px] md:w-[48%] bg-slate-600">
            <Image
              src="/images/works4.png"
              alt="Image 1"
              width={1500}
              height={1500}
              className="w-full h-full lg:object-top object-cover"
            />
            {/* ////////////////////////////////////
              Hover effect
//////////////////////////////////////*/}
            <div
              className={`workHover w-full h-full transition-all duration-500 absolute top-0 right-0 text-white`}
            >
              <p className="hoverLink absolute top-10 left-10 flex flex-col justify-center items-center">
                <b className="border border-b border-gray-300 w-10 rotate-90  "></b>
                <Link
                  target="_blank"
                  href="https://devdashk66.github.io/Oshine_Business/"
                >
                  <BsLink45Deg
                    title="Project Link"
                    className="border border-gray-200 rounded-full p-2 mt-5 text-4xl hover:bg-white hover:text-gray-900 transition-all duration-300 "
                  />
                </Link>
              </p>

              <Link
                title="View Project"
                target="_blank"
                href="https://devdashk66.github.io/Oshine_Business/"
              >
                <BsEyeFill className="hoverEye text-2xl hover:text-[#39b54a] transition-all duration-300" />
              </Link>
              <div className="hoverTitle font-bold text-lg">
                <p>Oshine Business</p>
                <p className="text-xs text-gray-300">
                  Oshine Business: Crafting Memorable Brand Experiences
                </p>
              </div>
            </div>
            {/* ///////hover end////// */}
          </div>

          <div className=" relative  overflow-hidden w-[500px] h-[500px] md:w-[48%] md:h-[700px] md:-mt-[200px] lg:-mt-[200px] bg-slate-300">
            <Image
              src="/images/works5.png"
              alt="Image 1"
              width={1500}
              height={1500}
              className="w-full h-full lg:object-top object-cover"
            />
            {/* ////////////////////////////////////
              Hover effect
//////////////////////////////////////*/}
            <div
              className={`workHover w-full h-full transition-all duration-500 absolute top-0 right-0 text-white`}
            >
              <p className="hoverLink absolute top-10 left-10 flex flex-col justify-center items-center">
                <b className="border border-b border-gray-300 w-10 rotate-90  "></b>
                <Link
                  target="_blank"
                  href="https://devdashk66.github.io/Personal_Portfolio_Website/"
                >
                  <BsLink45Deg
                    title="Project Link"
                    className="border border-gray-200 rounded-full p-2 mt-5 text-4xl hover:bg-white hover:text-gray-900 transition-all duration-300 "
                  />
                </Link>
              </p>

              <Link
                title="View Project"
                target="_blank"
                href="https://devdashk66.github.io/Personal_Portfolio_Website/"
              >
                <BsEyeFill className="hoverEye text-2xl hover:text-[#39b54a] transition-all duration-300" />
              </Link>
              <div className="hoverTitle font-bold text-lg">
                <p>Developer Portfolio</p>
                <p className="text-xs text-gray-300">
                  Showcasing My Digital Craft: A Developer Portfolio
                </p>
              </div>
            </div>
            {/* ///////hover end////// */}
          </div>

          <div className=" relative  overflow-hidden w-[500px] h-[500px] md:w-[48%] bg-slate-900">
            <Image
              src="/images/works6.png"
              alt="Image 1"
              width={1500}
              height={1500}
              className="w-full h-full lg:object-top object-cover"
            />
            {/* ////////////////////////////////////
              Hover effect
//////////////////////////////////////*/}
            <div
              className={`workHover w-full h-full transition-all duration-500 absolute top-0 right-0 text-white`}
            >
              <p className="hoverLink absolute top-10 left-10 flex flex-col justify-center items-center">
                <b className="border border-b border-gray-300 w-10 rotate-90  "></b>
                <Link
                  target="_blank"
                  href="https://devdashk66.github.io/Oshine_Architecture/"
                >
                  <BsLink45Deg
                    title="Project Link"
                    className="border border-gray-200 rounded-full p-2 mt-5 text-4xl hover:bg-white hover:text-gray-900 transition-all duration-300 "
                  />
                </Link>
              </p>

              <Link
                title="View Project"
                target="_blank"
                href="https://devdashk66.github.io/Oshine_Architecture/"
              >
                <BsEyeFill className="hoverEye text-2xl hover:text-[#39b54a] transition-all duration-300" />
              </Link>
              <div className="hoverTitle font-bold text-lg">
                <p>Architecture Site</p>
                <p className="text-xs text-gray-300">
                  Crafting Stunning Spaces with Architecture
                </p>
              </div>
            </div>
            {/* ///////hover end////// */}
          </div>
        </div>

        {/* /////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
};

export default Works;
