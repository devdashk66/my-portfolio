import React from "react";
import PageHeading from "./Helper/PageHeading";
import { AiOutlineAntDesign, AiOutlineCamera } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { BiCopy } from "react-icons/bi";
import { BsArrowRightCircle, BsCodeSlash } from "react-icons/bs";

const Services = () => {
  return (
    <div className="service ">
      <div className="container pt-24 h-screen  px-10 m-auto overflow-scroll hidescroll">
        <PageHeading
          title="WHAT I DO"
          text="I have got everything you need to launch and grow your business"
          color="text-gray-800"
        />

        <div>
          <div className="flex justify-center items-center gap-32 lg:gap-32  m-24 servicebox flex-wrap   mb-[130px] sm:-mb-[120]">
            <div>
              <div>
                <AiOutlineAntDesign className="text-6xl brand" />
                <p className="text-[22px] py-3 brand font-bold">Web Design</p>
                <p className="text-gray-500 mb-3">
                  Designing a Better Web: Tips and Tricks for Effective Web
                  Design
                </p>
                <BsArrowRightCircle className="text-xl brand" />
              </div>
            </div>
            <div>
              <div>
                <BsCodeSlash className="text-6xl brand" />
                <p className="text-[22px] py-3 brand font-bold">
                  Web Development
                </p>
                <p className="text-gray-500 mb-3">
                  Unlocking the Power of the Web: A Guide to Web Development
                </p>
                <BsArrowRightCircle className="text-xl brand" />
              </div>
            </div>
            <div>
              <div>
                <BiCopy className="text-6xl brand" />
                <p className="text-[22px] py-3 brand font-bold">UI/UX Design</p>
                <p className="text-gray-500 mb-3">
                  Crafting Memorable Digital Experiences: The Art of UI/UX
                  Design
                </p>
                <BsArrowRightCircle className="text-xl brand" />
              </div>
            </div>
            <div className=" xl:-mt-40">
              <div>
                <FaRegLightbulb className="text-6xl brand" />
                <p className="text-[22px] py-3 brand font-bold">
                  Brand Identity
                </p>
                <p className="text-gray-500 mb-3">
                  Building Strong Brands: The Power of Brand Identity
                </p>
                <BsArrowRightCircle className="text-xl brand" />
              </div>
            </div>

            <div className="lg:-mt-28 xl:-mt-40">
              <div>
                <AiOutlineCamera className="text-6xl brand" />
                <p className="text-[22px] py-3 brand font-bold">Photography</p>
                <p className="text-gray-500 mb-3">
                  Capturing Moments Through the Lens: The Art of Photographyr
                </p>
                <BsArrowRightCircle className="text-xl brand" />
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center items-center gap-32 m-24 servicebox flex-wrap  ">
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
