"use client";
import { useState } from "react";
import Image from "next/image";
import LogoImage from "../assets/images/Frame.png";
import menu from "../assets/icones/menu.png";
import cross from "../assets/icones/cross.png";
import NavBarButtons from "./nav-bar-buttons";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "Top sales", "Collections", "Our blog", "About us"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex flex-row justify-between items-center py-4 px-0 w-full mx-auto h-[76px] mt-[12px]">
      <div className="relative w-[36px] h-[36px]">
        <Image src={LogoImage} layout="fill" objectFit="contain" alt="Logo" />
      </div>
      <ul className="hidden md:flex flex-row items-start p-0 gap-7 w-[449px] h-[24px]">
        {links.map((link, i) => (
          <li
            className="font-semibold text-my_neutral-700 text-[16px] leading-6 cursor-pointer"
            key={i}
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <NavBarButtons />
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex flex-col relative items-center justify-center w-[50px] h-[50px]"
        >
          <Image src={menu} layout="fill" objectFit="contain" alt="Logo" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F8F8F8] z-50 flex flex-col items-start py-3 px-12 gap-16 isolate h-[100vh] w-[100vw] ">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 w-[50px] h-[50px] flex items-center justify-center"
          >
            <div className="relative w-[50px] h-[50px]">
              <Image src={cross} layout="fill" objectFit="contain" alt="Logo" />
            </div>
          </button>
          <ul className="flex flex-col items-start space-y-6 pt-7">
            {links.map((link, i) => (
              <li
                className="font-semibold text-my_neutral-700 text-[16px] leading-6 cursor-pointer"
                key={i}
                onClick={toggleMenu}
              >
                {link}
              </li>
            ))}
          </ul>
          <NavBarButtons />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
