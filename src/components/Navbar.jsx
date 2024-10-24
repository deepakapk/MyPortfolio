import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import ParticlesComponent from "./PaticlesComponent";

const Navbar = () => {
  return (
    <>
      <header className="text-white flex items-center justify-between px-4 mt-4 max-w-screen-2xl mx-auto w-full relative ">
        <svg
          width="70"
          height="70"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 20 H 100 A 80 80 0 1 1 100 180 H 50 V 20 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="20"
          />
          <path
            d="M70 40 H 100 A 60 60 0 1 1 100 160 H 70 V 40 Z"
            fill="none"
            stroke="#000"
            strokeWidth="20"
          />
          <path
            d="M90 60 H 100 A 40 40 0 1 1 100 140 H 90 V 60 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="20"
          />
        </svg>
        <div className="flex gap-4 text-3xl mr-1">
          <a href="#contact" className="hover:text-white hover:scale-110 text-[#b0b2c3]">
            <FaSquarePhone />
          </a>
          <a target="_blank" href="Use https://wa.me/+919650449458" className="hover:text-white hover:scale-110 text-[#b0b2c3]">
            <RiWhatsappFill />
          </a>
        </div>
      </header>
      <div className="absolute inset-0 hidden -z-10 md:block ">
        <ParticlesComponent />
      </div>
    </>
  );
};

export default Navbar;
