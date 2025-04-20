import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import GlassmorphicTechnologies from "./GlassmorphicTechnologies";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
       <GlassmorphicTechnologies/>
    </div>
  );
};

export default SectionWrapper(Tech, "");
