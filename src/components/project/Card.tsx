import React from "react";

interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
}

interface CardProps {
  dataProject: Project[];
}

const Card: React.FC<CardProps> = ({ dataProject }) => {
  return (
    <div className="w-full h-full mt-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {dataProject.map((project) => {
          return (
            <div
              key={project.id}
              className="relative group overflow-hidden cursor-pointer"
            >
              <div className="w-full h-[250px] overflow-hidden relative">
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-full group-hover:scale-125 transition ease-in-out duration-500 delay-75"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-20 group-hover:opacity-90 transition-opacity duration-300"></div>
              {/* Text Content */}
              <div className="px-10 absolute inset-0 text-white group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-2xl font-semibold translate-y-48 group-hover:translate-y-36 transition ease-in-out duration-500 ">
                  {project.title}
                </h1>
                <p className="translate-y-56 group-hover:translate-y-36 transition ease-in-out duration-500">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
