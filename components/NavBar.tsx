import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
      style={{ backgroundColor: "#ecf0f3" }}
    >
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
        <Link href="/">
          <a className="text-blue-600 text-2xl italic">PEASE</a>
        </Link>

        <div>
          <ul className="hidden md:flex">
            <li className="navlinkk ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="navlinkk ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="navlinkk ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="navlinkk ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
            <li className="navlinkk ml-10 text-sm uppercase hover:border-b">
              <a href="/images/Peace's_Resume.pdf" download>
                Resume
              </a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a className="text-blue-600 text-2xl italic">PEASE</a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build amazing stuffs!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className=" py-4 text-sm">
                <Link href="/#about">
                  <a className="navlinkk">About</a>
                </Link>
              </li>

              <li onClick={() => setNav(false)} className=" py-4 text-sm">
                <Link href="/#skills">
                  <a className="navlinkk">Skills</a>
                </Link>
              </li>

              <li onClick={() => setNav(false)} className=" py-4 text-sm">
                <Link href="/#projects">
                  <a className="navlinkk">Projects</a>
                </Link>
              </li>
              <li onClick={() => setNav(false)} className=" py-4 text-sm">
                <Link href="/#contact">
                  <a className="navlinkk">Contact</a>
                </Link>
              </li>

              <li onClick={() => setNav(false)} className=" py-4 text-sm">
                <a
                  href="/images/Peace's_Resume.pdf"
                  download
                  className="navlinkk"
                >
                  Resume
                </a>
              </li>
            </ul>
            <div className="pt-12">
              <p className="uppercase tracking-widest text-blue-600">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/peaceadeniji"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Ayomidemi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="mailto:peaseadeniji@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                  href="https://twitter.com/pease_js"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
