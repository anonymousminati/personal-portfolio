import React from "react";
import { technologies } from "../constants";

const GlassmorphicTechnologies = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 mt-20">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="relative w-28 h-28 rounded-full bg-white bg-opacity-10 backdrop-blur-md shadow-lg flex justify-center items-center"
        >
          {/* Rotating gradient border */}
          <div
            className="absolute inset-0 rounded-full border-[3px] border-transparent animate-spin-slow"
            style={{
              background: "conic-gradient(from 0deg, #915EFF, #00cea8, #915EFF)",
              mask: "border-box",
              WebkitMask: "border-box",
            }}
          ></div>
          <div className="w-[98%] h-[98%] bg-gray-700 bg-opacity-90 backdrop-blur-md z-50 flex justify-center items-center rounded-full">
          <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain z-10" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlassmorphicTechnologies;
