import SkillBar from "./SkillsBar";
const AnimatedSkillsBarProgram: React.FC = () => {
  return (
    <div className="lg:w-9/12 lg:h-full w-11/12 h-full m-auto md:w-10/12 md:h-full">
      <div>
        <SkillBar skill="HTML" level={90} />
        <SkillBar skill="CSS" level={85} />
        <SkillBar skill="Bootstrap" level={80} />
        <SkillBar skill="React JS" level={60} />
        <SkillBar skill="React TypeScritp" level={10} />
        <SkillBar skill="JavaScript" level={70} />
        <SkillBar skill="TypeScript" level={10} />
        <SkillBar skill="Tailwind CSS" level={60} />
      </div>
    </div>
  );
};

export default AnimatedSkillsBarProgram;
