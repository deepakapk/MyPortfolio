import coder from "../assets/coder.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

const AboutModal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div
      className="absolute inset-0 flex justify-center items-center h-screen w-screen"
      onClick={closeModal} // Close modal on overlay click
     
    >
      <div className="relative flex bg-black text-white h-[90%] md:h-fit w-[90%] md:max-w-[1200px] rounded-2xl opacity-[0.87] overflow-hidden"
      onClick={(e) => e.stopPropagation()}> 
        <button onClick={closeModal}  className=" p-2 group transition-all text-2xl text-red-600 right-3 top-3 z-40 rounded-full bg-gray-800 absolute "><IoClose className="group-hover:rotate-180 duration-150 ease-in-out"/></button>
        <div className="md:w-1/2 md:px-20 md:py-10 p-7">
          <h1 className="font-[Spartan] text-[#1595b6] mb-6 md:text-3xl text-xl">
            ABOUT ME
          </h1>
          <p className="text-justify">
          I design interactive front-end components using <b>React</b>, develop efficient <b>back-end</b> systems with <b>Node.js</b>, and integrate <b>APIs</b> to ensure seamless data flow. I <b>debug</b> issues, <b>optimize</b> code for better performance, and collaborate with tools like <b>Git</b> to maintain code quality. Continuously exploring new frameworks, I strive to deliver <b>responsive</b> and <b>user-friendly</b> applications.
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
              #node.js
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #express.js
            </span>
            <span className="border border-yellow-300 px-3 py-1 rounded-3xl hover:scale-110 transition-all">
              #mongoDB
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
              #python
            </span>
          </div>
          <h1 className="font-[Spartan] text-[#1595b6] mb-20 my-6 md:text-3xl text-xl">
            MERN STACK
          </h1>
          <div className="flex items-center gap-5 ">
            <div className="group relative flex justify-center items-center flex-col gap-2">
              <span className="bg-green-500 px-4 py-1 absolute -translate-y-[70px] rounded-full font-[Nutino] transition-all duration-500 ease-in-out hidden group-hover:block ">
                MongoDB
              </span>
              <img src={mongodb} alt="coder" className="w-15 h-15 object" />
              <h3 className="font-[Spartan] text-green-500">M</h3>
            </div>
            <div className="group relative flex justify-center items-center flex-col gap-2">
              <span className="bg-white text-black px-4 py-1 absolute -translate-y-[70px] rounded-full font-[Nutino] ease-in-out hidden group-hover:block ">
                Express.js
              </span>
              <img src={express} alt="coder" className="w-15 h-15 object" />
              <h3 className="font-[Spartan] text-white">E</h3>
            </div>
            <div className="group relative flex justify-center items-center flex-col gap-2">
              <span className="bg-blue-500 px-4 py-1 absolute -translate-y-[70px] rounded-full font-[Nutino] ease-in-out hidden group-hover:block ">
                React.js
              </span>
              <img src={react} alt="coder" className="w-15 h-15 object" />
              <h3 className="font-[Spartan] text-blue-400">R</h3>
            </div>
            <div className="group relative flex justify-center items-center flex-col gap-2">
              <span className="bg-green-500 px-4 py-1 absolute -translate-y-[70px] rounded-full font-[Nutino] ease-in-out hidden group-hover:block ">
                Node.js
              </span>
              <img src={node} alt="coder" className="w-15 h-15 object" />
              <h3 className="font-[Spartan] text-green-500">N</h3>
            </div>
          </div>
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
