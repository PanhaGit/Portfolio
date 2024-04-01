import React, { useState } from "react";
import data from "./Data/data";

interface ButtonProps {
  dataItem: string[];
  handleFilterItem: (value: string) => void;
  setDataProject: (data: (typeof data)[]) => void;
}

const Button: React.FC<ButtonProps> = ({
  dataItem,
  handleFilterItem,
  setDataProject,
}) => {
  const [activeBtn, setActiveBtn] = useState("All");

  return (
    <div className="lg:w-full w-[330px] ml-7 lg:flex lg:justify-center lg:items-center mt-10 text-white grid grid-cols-2 gap-2 md:grid md:grid-cols-4 md:gap-2 md:w-full">
      <button
        className={`btn uppercase px-8 py-1   ${
          activeBtn === "All" && "bg-blue-600 px-8 py-1 rounded-full text-white"
        }`}
        onClick={() => {
          setActiveBtn("All");
          setDataProject(data);
        }}
        type="button"
      >
        All
      </button>
      {dataItem.map((value) => (
        <button
          key={value}
          className={`btn px-8 py-1  uppercase lg:m-2  ${
            activeBtn === value &&
            "bg-blue-600 px-8 py-1 rounded-full text-white"
          }`}
          onClick={() => {
            setActiveBtn(value);
            handleFilterItem(value);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Button;
