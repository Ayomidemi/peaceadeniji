import React from "react";
import BaseDirectories from "../base directories/BaseDirectories";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
        <h2 className="py-4 text-blue-600">SKILLS</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
         
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/react.png`}
                  width="64px"
                  height="64px"
                  alt="React J"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-6 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/flutter.png`}
                  width="64px"
                  height="64px"
                  alt="Bootstrap"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Flutter</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/nextjs.png`}
                  width="64px"
                  height="64px"
                  alt="Next JS"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
      
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-8 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/javascript.png`}
                  width="64px"
                  height="64px"
                  alt="JavaScript"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-8 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/typescript.png`}
                  width="64px"
                  height="64px"
                  alt="TypeScript"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
         
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/threejs.png`}
                  width="64px"
                  height="64px"
                  alt="CSS"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Three JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/jest.png`}
                  width="64px"
                  height="64px"
                  alt="Jest"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Jest</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/redux.png`}
                  width="64px"
                  height="64px"
                  alt="Redux"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/mobxx.png`}
                  width="64px"
                  height="64px"
                  alt="Github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MobX</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-6 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/tailwind.png`}
                  width="64px"
                  height="64px"
                  alt="Tailwind"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
         
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${BaseDirectories.SKILLS_DIR}/sass.png`}
                  width="64px"
                  height="64px"
                  alt="SCSS"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SCSS</h3>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Skills;
