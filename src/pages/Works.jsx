import React from 'react'
import ShowWorkL from '../components/ShowWorkL'
import ShowWorkR from '../components/ShowWorkR'
import Web from "../assets/Web.png"
import Password from "../assets/Password.png"
import Doctor from "../assets/Doctor.png"
import job from "../assets/job.png"
import ecommerce from "../assets/Ecommerce.png"
import ChatApp from "../assets/ChatApp.png"
import Streamify from "../assets/Streamify.png"

const Works = () => {
  return (
    <section className='max-w-screen-2xl mx-auto px-4 bg-black text-white relative pb-4' id="works">
      <h2 className='tablet:text-[40px] text-3xl font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] border-b-2 border-[#1788ae] relative bg-black z-10 tablet:mb-0 mb-16'>
        Latest Works
      </h2>

      <ShowWorkL bracket={"Appointment Booking"} description={"A hospital management web app streamlines patient records, appointments, billing, and staff workflows to ensure efficient healthcare delivery and seamless administration."} image={Doctor} link={"https://doctor-management-system-frontend.onrender.com/"} name={"Doctor Management System"} arr={["React.js", "MongoDb", "Node.js","Express.js", "ContextAPI", "Css", "Tailwind Css", "Javascript", "mongoose"]}/>

      <ShowWorkR bracket={"Offline Password Managing"} description={"An offline password manager securely stores and organizes passwords locally on your device, ensuring easy access and enhanced security without internet dependency."} image={Password} link={"https://passop-xxzh.onrender.com"} name={"Password Manager"} arr={["React.js", "MongoDb", "Node.js","Express.js", "ContextAPI", "Css", "Tailwind Css", "Javascript", "mongoose"]}/>

      <ShowWorkL bracket={"Job Application Platform"} description={"A job portal web app connects job seekers with employers, enabling efficient job searches, applications, and candidate management in one platform."} image={job} link={"https://cuvette-assignment-frontend.onrender.com"} name={"Job Portal"} arr={["React.js", "MongoDb", "Node.js","Express.js", "Css", "Tailwind Css", "Javascript", "mongoose", "Redux.js"]}/>

      <ShowWorkR bracket={"Portfolio For a client"} description={"A client portfolio web app showcases a collection of a client's projects, skills, or services in an organized and visually appealing format."} image={Web} link={"https://webnamaskar.onrender.com/"} name={"Web Namaskar"} arr={["React.js", "MongoDb", "Node.js","Express.js", "ContextAPI", "Css", "Tailwind Css", "Javascript", "mongoose"]}/>

      <ShowWorkL bracket={"E-commerce"} description={"A comprehensive e-commerce web application featuring product browsing, cart management, secure checkout, and order tracking, offering a seamless shopping experience. The platform includes an admin dashboard for efficient inventory control, user account management, and analytics monitoring."} image={ecommerce} link={"https://ecommerce-frontend-nine-green.vercel.app/"} name={"E-Commerce Application"} arr={["React.js", "MongoDb", "Node.js","Express.js", "Context API", "Css", "Tailwind Css", "Javascript", "mongoose",]}/>

      <ShowWorkR bracket={"A Real Time Chat App"} description={"Developed a real-time chat application using the MERN stack, featuring one-to-one messaging, image sharing, and instant notifications for an interactive user experience."} image={ChatApp} link={"https://fullstack-chat-app-61ik.onrender.com/login"} name={"Chatty"} arr={["React.js", "MongoDb", "Node.js","Express.js", "Zustand", "Css", "Tailwind Css", "Javascript", "mongoose", "Chakra Ui"]}/>

      <ShowWorkL bracket={"Video Sharing Platform"} description={"This project is a video sharing platform where users can upload, edit, and delete their own videos It allows users to update their profile details and manage personal content The platform uses Cloudinary for media storage and provides a responsive, user-friendly interface."} image={Streamify} link={"https://streamify-mclj.onrender.com/"} name={"Streamify"} arr={["React.js", "MongoDb", "Node.js","Express.js", "Redux", "Styled Components", "Javascript", "mongoose"]}/>

      <div className="tablet:block hidden w-[1px]  bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  )
}

export default Works
