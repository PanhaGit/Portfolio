import React, { useState, useEffect } from "react";
interface SkillBarProps {
  skill: string;
  level: number;
}
const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const [animationWidth, setAnimationWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationWidth(level);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [level]);
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="lg:h-4 md:h-3.5 h-2.5 bg-gray-200 shadow-2xl rounded-full">
        <div
          className="h-full bg-gradient-radialText rounded-full shadow-2xl"
          style={{
            width: `${animationWidth}%`,
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
