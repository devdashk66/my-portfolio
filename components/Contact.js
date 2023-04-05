import React, { useState } from "react";
import PageHeading from "./Helper/PageHeading";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("setName:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className="contact">
      <div className="container pt-24 h-screen  md:px-10 m-auto overflow-scroll hidescroll relative text-center ">
        <div className="px-10">
          <PageHeading
            title="CONTACT ME"
            text="Reach out for a new project or just say hello"
            color="text-gray-200"
          />
        </div>
        <div className="flex items-center pt-12 flex-wrap">
          <div className="lg:basis-3/5 basis-full bg-[#00000050] h-[625px]">
            <div className="flex justify-left mt-8">
              <form
                className="w-full max-w-full  p-8 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
              >
                <h2 className="text-md text-left font-bold text-gray-200 mb-6">
                  SEND ME A MESSAGE
                </h2>
                <div className="mb-4">
                  <input
                    placeholder="Your Name"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none outline-none border-b-2 border-gray-700 w-full py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:border-b-2 focus:border-[#39b54a] bg-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    placeholder="Your Email"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none outline-none border-b-2 border-gray-700 w-full py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:border-b-2 focus:border-[#39b54a] bg-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="shadow appearance-none outline-none border-b-2 border-gray-700 w-full py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:border-b-2 focus:border-[#39b54a] bg-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none outline-none border-b-2 border-gray-700 w-full py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:border-b-2 focus:border-[#39b54a] bg-transparent transition-all duration-300"
                    rows="8"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#39b54a] w-full hover:bg-[#27a137] transition-all duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:basis-2/5 basis-full md:bg-[#121212] bg-[#00000050] h-[625px] p-8">
            <h2 className="text-md text-left font-bold text-gray-200 mb-6 flex justify-left mt-8">
              SEND ME A MESSAGE
            </h2>
            <div className="mt-14 text-left">
              <div>
                <h3 className="brand font-bold mb-3">Where to Find Me</h3>
                <p className="w-3/5 text-gray-500">
                  Bogra Sadar 5800, <br /> Rajshahi Bangladesh
                </p>
              </div>
            </div>
            <div className="mt-14 text-left">
              <div>
                <h3 className="brand font-bold mb-3">Email Me At</h3>
                <p className="w-3/5 text-gray-500">
                  devdashkofficial@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-14 text-left">
              <div>
                <h3 className="brand font-bold mb-3">Call Me At</h3>
                <p className="w-3/5 text-gray-500">Phone: (+880) 1751 136266</p>
                <p className="w-3/5 text-gray-500">Phone: (+880) 1642 946313</p>
              </div>
            </div>
            <div className=" flex md:justify-start justify-center gap-5 items-center mt-14">
              <a
                href="https://www.linkedin.com/in/devdashk66/"
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-[#39b54a] text-white cursor-pointer duration-500 transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/devdashk66"
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-[#39b54a] text-white cursor-pointer duration-500 transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/devdashk66"
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-[#39b54a] text-white cursor-pointer duration-500 transition-all"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/dev_k66"
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-[#39b54a] text-white cursor-pointer duration-500 transition-all"
              >
                <FaInstagram />
              </a>

              <a
                href="https://dribbble.com/devdashk"
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-[#39b54a] text-white cursor-pointer duration-500 transition-all"
              >
                <FaDribbble />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
