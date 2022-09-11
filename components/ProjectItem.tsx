import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const ProjectItem: React.FunctionComponent<Projects> = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  githubUrl
}) => {
  return (
    <div className="relative flex items-center justify-center h-[50vh] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-blue-500 to-blue-400">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
        layout="fill"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <h5 className="pb-4 pt-2 text-white text-center">{tech}</h5>
        <div className="flex gap-8 justify-center items-center">
        <a href={projectUrl} target="_blank" rel="noreferrer">
          <p className="text-center py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Website
          </p>
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <p className="text-center py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Github
          </p>
        </a>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectItem;
