import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <div className="container m-auto hidescroll  h-screen pt-28 xl:pt-28 overflow-scroll">
        <div className="flex justify-center  items-center text-white gap-10 flex-col-reverse lg:flex-row mt-5 lg:mt-0 lg:pt-38 xl:pt-0">
          <div className="w-4/4 lg:w-2/4 px-10 md:px-0 ">
            <h1 className="headingfont capitalize py-5 text-2xl md:text-3xl md:leading-[48px] leading-[38px]  lg:text-4xl lg:leading-[58px] xl:text-5xl xl:leading-[68px]">
              I'm Dev,
              <br />
              web designer & web developer <br />
              from Rajshahi Bangladesh.
            </h1>
            <p className="text-[18px]  bg font-light leading-[28px] text-gray-400">
              I have rich experience in web site design & building and
              customization. Also I am good at html, css, javascript, react,
              next.js, firebase, tailwind.css, bootstrap, wordpress. I love to
              talk with you about our unique approach. Feel free to contact me
              writing an email with your project idea.
            </p>

            <button className="py-2 px-7 text-sm md:text-base  md:py-3 md:px-8 border border-[#39b54a] hover:bg-[#39b54a] duration-500 transition-all my-8">
              Download Resume
            </button>
          </div>
          <div className="w-3/3 lg:w-1/4   w-[300px]  p-4 imageborder">
            <Image
              width={400}
              height={800}
              src="/images/my_photos.jpg"
              className="rounded-md"
              alt="Dev"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
