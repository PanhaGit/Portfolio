import "./App.css";
import About from "./components/About";
import AnimatedSkillsBarProgram from "./components/skills/skillsProgramming/AnimatedSkillsBarProgram";
import Info from "./components/Info";
import Navber from "./components/Navber";
import Project from "./components/project/project";
import { FaCode } from "react-icons/fa";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navber />
      <div className="all-bg">
        <Info />
        <div className="w-full h-screen bg-gradient-radialAbout animate-gradient">
          <About />
        </div>
        <div className=" text-white gradient w-full h-full skills py-10">
          <div className=" flex items-center justify-center">
            <h1 className="lg:text-5xl md:text-5xl text-4xl textcen">Skills</h1>

            <FaCode className="mx-2 text-red-500 text-5xl" />
          </div>
          <AnimatedSkillsBarProgram />
        </div>
        <div className="w-full project py-16">
          <Project />
        </div>
        <div className="w-full project py-7">
          <Contact />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
