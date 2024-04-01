import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

interface Menu {
  id: number;
  page: string;
}

const menuPages: Menu[] = [
  {
    id: 1,
    page: "Home",
  },
  {
    id: 2,
    page: "About",
  },
  {
    id: 3,
    page: "Skills",
  },
  {
    id: 5,
    page: "Project",
  },
  {
    id: 4,
    page: "Contact",
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-9/12 h-[100px] m-auto lg:flex justify-between items-center hidden">
        {/* logo */}
        <div className="lg:w-32 lg:h-32 ">
          <img
            src={Logo}
            alt="Logo Panha"
            className="w-full h-full object-cover"
          />
        </div>
        {/* end logo */}

        {/* Menu */}
        {/* laptop */}
        <ul className="lg:flex items-center">
          {menuPages.map((menuPage) => (
            <li
              key={menuPage.id}
              className="ml-9 text-lg font-semibold hover:text-gray-500  cursor-pointer transition ease-linear delay-200 duration-150"
            >
              {menuPage.page}
            </li>
          ))}
        </ul>
        {/* end Menu */}
        {/* end laptop */}
      </div>
      {/* end Laptop */}

      {/* Tablet */}
      <div className="w-full h-full lg:hidden ">
        <div className="w-11/12 m-auto h-full flex justify-between items-center">
          <div className="md:w-24 md:h-24  w-20 h-20">
            <img
              src={Logo}
              alt="Logo Panha"
              className="w-full h-full object-cover"
            />
          </div>
          {/* btn */}
          <div className="lg:hidden ">
            <button
              className="text-3xl  transition-opacity duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <IoCloseSharp /> : <RiMenu3Fill />}
            </button>
          </div>
          {/* end btn */}
        </div>
      </div>
      <div
        className={`w-full transition-transform duration-300 bg-white pt-10 ${
          isMenuOpen ? "" : "-translate-x-[100%] absolute"
        }`}
      >
        <ul className="md:flex flex-col w-[20%] translate-x-10 transition-all ease-linear duration-75 delay-75">
          {menuPages.map((menuPage) => (
            <li
              key={menuPage.id}
              className="mb-9 md:text-center md:font-medium text-lg font-semibold  hover:text-gray-500 cursor-pointer transition ease-linear delay-200 duration-150"
              onClick={toggleMenu}
            >
              {menuPage.page}
            </li>
          ))}
        </ul>
      </div>

      {/* end Tablet */}
    </>
  );
};

export default Navbar;
