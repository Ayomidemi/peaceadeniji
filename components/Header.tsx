import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto px-6 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING COOL.
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-blue-600"> Peace (Pease) Adeniji</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web & Mobile Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            My expertise is in the area of responsive design. With every line of
            code, I strive to make the web a beautiful place. Welcome to my
            space and let&#39;s build amazing stuff!
          </p>
          <div className="flex items-center justify-between max-w-[270px] sm:max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/peaceadeniji"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Ayomidemi"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
                  href="mailto:peaseadeniji@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a
                  href="https://twitter.com/pease_js"
                  target="_blank"
                  rel="noreferrer"
                >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                <BsTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
