import React from "react";
import AnimatedSkillsBarProgram from "./skills/skillsProgramming/AnimatedSkillsBarProgram";

interface ShootingStarProps {
  children: React.ReactNode; // Define children prop type
}

const ShootingStar: React.FC<ShootingStarProps> = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-radialAbout">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="absolute shooting_star"
          style={{
            top: `calc(50% - ${Math.floor(Math.random() * 200) - 100}px)`,
            left: `calc(50% - ${Math.floor(Math.random() * 300)}px)`,
            animationDelay: `${Math.random() * 10000}ms`,
          }}
        >
          <div
            className="absolute w-30 h-2 bg-gradient-to-r from-blue-500 to-transparent"
            style={{
              transform: "translateX(50%) rotateZ(45deg)",
              borderRadius: "50%",
              filter: "drop-shadow(0 0 6px rgba(105, 155, 255, 1))",
              animation: "shining 3000ms ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute w-30 h-2 bg-gradient-to-r from-transparent to-blue-500"
            style={{
              transform: "translateX(50%) rotateZ(45deg)  rotateZ(-45deg)",
              borderRadius: "50%",
              animation: "shining 3000ms ease-in-out infinite",
              //   transform: "translateX(50%) rotateZ(-45deg)",
            }}
          ></div>
        </div>
      ))}
      <div className="w-full h-full absolute top-[20%] "></div>
    </div>
  );
};

export default ShootingStar;
