import React from "react";
import hero from "../assets/hero.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

// interface InfoBody {
//   title?: string;
//   name?: string;
//   position?: string;
//   span?: string;
//   id: number;
// }

// const info: InfoBody[] = [
//   {
//     id: 1,
//     title: "Hello",
//   },
//   {
//     id: 2,
//     name: "I'm",
//     span: "Panha",
//   },
//   {
//     id: 3,
//     position: "Web Design",
//   },
// ];

const Info: React.FC = () => {
  return (
    <div className="lg:h-full md:h-full h-full w-full z-20">
      <div className="bg-gradient-radial w-full h-screen md:h-full lg:h-screen ">
        <div className="lg:w-9/12 h-full m-auto grid lg:grid-cols-2 md:grid-cols-1 lg:gap-3 md:w-11/12 w-11/12 overflow-hidden">
          <div className="text-white  md:h-full py-2 lg:w-full lg:h-full lg:pt-52  md:mt-[0px] ">
            <div className="p-5">
              <h1 className="lg:text-5xl md:text-5xl text-4xl font-semibold">
                Hello
              </h1>
              <div className="flex items-center">
                <p className="lg:text-5xl md:text-5xl font-semibold mr-3 text-4xl">
                  I am
                </p>
                <TypeAnimation
                  sequence={["Panha", 3000, "Web Design", 3000]}
                  wrapper="span"
                  speed={8}
                  repeat={Infinity}
                  className=" lg:text-5xl py-4 font-semibold md:text-5xl text-orange-400 text-4xl bg-gradient-radial2 bg-clip-text"
                />
              </div>
              <p className="lg:text-xl text-gray-200 pt-2 md:text-xl my-1 text-sm font-semibold">
                Junior Front-End Developer(React JS / Git Hub / HTML / CSS /
                JaveScript / Tailwind CSS / Bootstrap).
              </p>
              <div className="flex items-center text-white mt-4">
                <a
                  href="https://web.facebook.com/Errolcal"
                  target="_blank"
                  className="me-3 text-2xl py-2 hover:text-blue-500 transition hover:scale-125 delay-100 ease-linear duration-150"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/tho-panha-893259284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  className="me-3 text-2xl py-2 hover:text-blue-400 transition hover:scale-125 delay-100 ease-linear duration-150"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/errolcal?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                  target="_blank"
                  className="me-3 text-2xl py-2 hover:text-red-700 transition hover:scale-125 delay-100 ease-linear duration-150"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/PanhaGit"
                  target="_blank"
                  className="me-3 text-2xl py-2  transition hover:scale-125 delay-100 ease-linear duration-150"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-screen lg:w-full lg:h-screen md:h-full md:w-full flex items-center justify-center">
            <img
              src={hero}
              alt="admin"
              className="lg:w-full w-[500px] h-[500px] object-cover lg:h-full lg:relative lg:left-5 lg:-top-32 z-20 md:w-full md:relative md:-left-0 md:-top-[87px] relative bottom-[31%] left-[0%]"
            />
          </div>
          {/* laptop */}
          {/* <div className="bg-gradient-radial2 w-[360px] h-[360px] rounded-full absolute top-[280px] left-[58%] lg:flex md:hidden hidden"></div> */}
          {/* end laptop */}

          {/* tablet */}
          {/* <div className="bg-gradient-radial2 w-[320px] h-[320px] rounded-full absolute top-[535px] left-[32%] md:flex lg:hidden sm:hidden hidden"></div> */}
          {/*​end tablet */}

          {/* mobile */}
          {/* <div className="bg-gradient-radial2  w-[300px] h-[300px] rounded-full absolute top-[60%] left-[13%] md:hidden lg:hidden sm:flex"></div> */}
          {/*​end mobile */}
        </div>
      </div>
    </div>
  );
};

export default Info;
