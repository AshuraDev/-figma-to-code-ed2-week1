import React from "react";
import LogoImage from "../assets/images/Frame.png";
import Image from "next/image";

const Footer = () => {
  //
  const links = ["Privacy", "Terms & Conditions", "About us"];
  //
  return (
    <footer className=" w-full flex flex-col items-start p-0 gap-[14px]">
      <div className="w-full flex flex-row items-center justify-start content-center ">
        <div className="relative h-8 w-8">
          <Image src={LogoImage} layout="fill" objectFit="contain" alt="Logo" />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between items-center content-start py-2 px-0 gap-y-4 gap-x-64 w-full h-[96px]">
        <h3 className="font-semibold text-[24px] leading-8 text-my_neutral-600 max-md:text-[20px] max-sm:text-[18px]">
          Create Explore & Collect Digital NFTs
        </h3>
        <div className="flex flex-row items-start p-0 gap-8">
          {links.map((link, i) => (
            <span className="font-medium text-sm text-black" key={i}>
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
