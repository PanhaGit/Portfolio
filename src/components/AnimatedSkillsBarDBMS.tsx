import React from "react";
import SkillBar from "./skills/skillsProgramming/SkillsBar";
const AnimatedSkillsBarDBMS: React.FC = () => {
  return (
    <div className="p-4 w-11/12 h-full m-auto lg:9/12 lg:h-full md:w-10/12 md:h-full">
      <SkillBar skill="Bootstrap" level={80} />
    </div>
  );
};

export default AnimatedSkillsBarDBMS;
