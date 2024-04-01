import Button from "./Button";
import Card from "./Card";
import data from "./Data/data";
import { useState } from "react";

interface DataProps {
  id: number;
  img: string;
  skills: string;
  title: string;
  description: string;
}

const Project: React.FC = () => {
  const [dataProject, setDataProject] = useState<DataProps[]>(data);
  const dataItem = [...new Set(data.map((value) => value.skills))];

  const handleFilterItem = (value: string) => {
    const filteredData = data.filter((item) => item.skills === value);
    setDataProject(filteredData);
  };

  return (
    <>
      <div className="w-11/12 h-full m-auto lg:w-9/12 lg:h-full md:w-10/12 md:h-full ">
        <h1 className="text-center lg:text-5xl font-semibold text-white py-2 md:text-5xl text-3xl">
          Project
        </h1>
        <Button
          dataItem={dataItem}
          handleFilterItem={handleFilterItem}
          setDataProject={setDataProject}
        />
        <div className="my-10">
          <Card dataProject={dataProject} />
        </div>
      </div>
    </>
  );
};

export default Project;
