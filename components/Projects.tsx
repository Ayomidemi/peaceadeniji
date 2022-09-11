import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import BaseDirectories from "../base directories/BaseDirectories";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 h-full">
        <p className="text-xl tracking-widest uppercase text-blue-600">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Peniel Day Foundation"
            backgroundImg={`${BaseDirectories.PROJECT_DIR}/peniel.png`}
            projectUrl="https://www.penielday.org"
            tech="React JS"
            githubUrl="https://github.com/Ayomidemi/peniel-day-foundation"
          />
          <ProjectItem
            title="Apple Clone"
            backgroundImg={`${BaseDirectories.PROJECT_DIR}/apple-clone.png`}
            projectUrl="https://next-js-apple-clone.vercel.app/"
            tech="Next JS"
            githubUrl="https://github.com/Ayomidemi/NextJs-Apple-Clone"
          />
          <ProjectItem
            title="Nft Landing Page"
            backgroundImg={`${BaseDirectories.PROJECT_DIR}/nft.png`}
            projectUrl="https://nft-landing-page-by-peace.netlify.app/"
            tech="React JS"
            githubUrl="https://github.com/Ayomidemi/nft-landing-page"
          />
          <ProjectItem
            title="Tailwind Finance App"
            backgroundImg={`${BaseDirectories.PROJECT_DIR}/tailwind.png`}
            projectUrl="https://tailwind-finance-landing-page.netlify.app/"
            tech="React TypeScript"
            githubUrl="https://github.com/Ayomidemi/Tailwind-LandingPage"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
