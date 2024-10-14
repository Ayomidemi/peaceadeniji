import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/images/pease.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen px-8 flex items-center py-16 bg-gray-300"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-blue-600">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-blue-600">&#123; Pease.js &#125;</p>
          <p className="py-2 text-gray-600">
            Hi there! I&#39;m Peace (legally) but prefer being referred to as Pease (I promise
            there&#39;s no big reason, it&#39;s just a matter of preference
            &#128521;), based in Lagos, Nigeria. With dedicated passion for UI
            effects, cutting edge technology, animations and creating intuitive,
            dynamic user experiences, I build amazing stuffs using React JS,
            React Native and Flutter.
          </p>
          <p className="py-2 text-gray-600">
            I&#39;m great at a lot of things but I shine most at frontend
            development and even more enthused with making interactive applications.
            The big picture is to become an amazing Blockchain Engineer
            &#128516; so I spend most of my time building new projects and
            learning new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              But hey, don&#39;t just take my word for it, check out some of my
              projects &#128075;
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="Peace Adeniji" />
        </div>
      </div>
    </div>
  );
};

export default About;
