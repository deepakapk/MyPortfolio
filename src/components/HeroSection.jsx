import React, { useEffect, useState } from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo3.webp"
import { CgArrowLongRight } from "react-icons/cg";
import AboutModal from './AboutModal';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define closeModal function properly
  const closeModal = (e) => {
    e.stopPropagation(); // Prevent closing the modal if it's called from inside the modal
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    
    // Cleanup to ensure body scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <div className='text-[#b0b2c3] -mt-10 flex items-center justify-center relative'>
        <div className='max-w-screen-2xl mx-auto w-full px-4'>
            <img src={logo} alt="" className='md:w-[650px] w-[400px] absolute top-0  -translate-y-1/3 -translate-x-1/2 left-1/2 brightness-50'/>
            <div className="relative ml-3 ">
            <h1 className='md:text-[64px] text-[32px] font-[Spartan] mr-8'>Deepak Baghel</h1>
            <p className='font=[Merriweather] italic mb-8 mr-8 '>MERN Stack Developer</p>
            <button className='group hover:scale-110 transition-all  bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] flex justify-center items-center' onClick={openModal}>About Me<CgArrowLongRight
            className='absolute translate-x-14 group-hover:translate-x-16 transition-all group-hover:scale-150'/>
            </button>
            {
              isOpen && <AboutModal closeModal={closeModal}/>

            }
            </div>
        </div>
      <ul className='text-3xl ml-auto flex flex-col gap-6 absolute right-8 '>
        <a className='hover:text-white hover:scale-110' target='_blank' href="https://www.linkedin.com/in/deepak-baghel-dshr/"><li ><BsLinkedin /></li></a>
        <a className='hover:text-white hover:scale-110' target='_blank' href="https://x.com/DSHR101"><li ><FaSquareXTwitter /></li></a>
        <a className='hover:text-white hover:scale-110' target='_blank' href="https://www.instagram.com/_.deepak.__.30/"><li ><FaInstagramSquare /></li></a>
        <a className='hover:text-white hover:scale-110' target='_blank' href="mailto:deepakbaghel673@gmail.com"><li ><IoIosMail /></li></a>
        <a className='hover:text-white hover:scale-110' target='_blank' href="https://github.com/deepakapk"><li ><FaGithub /></li></a>
      </ul>
    </div>
  )
}

export default HeroSection
