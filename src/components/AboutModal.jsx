import coder from "../assets/coder.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { CgArrowLongRight } from "react-icons/cg";
import resume from "../assets/Deepak-Baghel--Resume.pdf"

const AboutModal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div
      className="absolute inset-0 flex justify-center items-center h-screen w-screen"
      onClick={closeModal} // Close modal on overlay click
    >
      <div
        className="relative flex bg-black text-white h-[90%] md:h-fit w-[90%] md:max-w-[1200px] rounded-2xl opacity-[0.87] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className=" p-2 group transition-all text-2xl text-red-600 right-3 top-3 z-40 rounded-full bg-gray-800 absolute "
        >
          <IoClose className="group-hover:rotate-180 duration-150 ease-in-out" />
        </button>
        <div className="md:w-1/2 md:px-20 md:py-10 p-7">
          <h1 className="font-[Spartan] text-[#1595b6] mb-6 md:text-3xl text-xl">
            ABOUT ME
          </h1>
          <p className="text-justify">
            Driven and innovative Software Developer with hands-on experience in
            crafting efficient algorithms, scalable applications, and full-stack
            solutions using{" "}
            <b>C, C++, Java, Python, JavaScript, and the MERN stack.</b>
            Experienced in debugging complex issues, optimizing application
            performance, and delivering impactful software solutions.
          </p>
          <div className="flex gap-2 flex-wrap my-7">
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #javascript
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #react.js
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #redux
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #zustand
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #node.js
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #express.js
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #jwt
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #contextAPI
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #socket.io
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #mongoDB
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #mysql
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #mongoose
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #cloudinary
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #ejs
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #html
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #css
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #bootstrap
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #tailwind
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #git
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #github
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #c++
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #c
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #python
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #java
            </span>
          </div>
          <a href={resume} download><button className="group hover:scale-110 transition-all  bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] flex justify-center items-center">
            Download Resume
          </button></a>
        </div>
        <div className="hidden w-1/2 md:flex items-center justify-center relative">
          <img src={coder} alt="coder" />
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default AboutModal;
