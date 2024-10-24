import React from "react";
import { MdOutlineExitToApp } from "react-icons/md";

const ShowWorkR = ({bracket, description, image ,name, link}) => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row gap-8 tablet:gap-[80px] items-center tablet:mt-12 mt-6 relative tablet:mb-0 mb-12">
      <div className="w-full">
        <h3 className="text-[#ffe578] font-bold text-2xl tablet:text-4xl">{name}</h3>
        <span className="text-[#ffe578] tablet:text-lg">({bracket})</span>
        <p className="text-justify text-sm tablet:text-md mt-2">
          {description}
        </p>

        <ul className="flex flex-wrap tablet:gap-2 gap-1 text-sm tablet:text-md mt-2">
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #react.js
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #express.js
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #node.js
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #swiper.js
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #mongoDB
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #mongoose
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #css
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #javascript
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
            #figma
          </li>
        </ul>
      </div>
      <div className="tablet:block hidden h-[1px] right-1/4 left-1/2 bg-[#ffe578] absolute top-1/2 "></div>
      <div className="tablet:block hidden w-5 h-5 rounded-full absolute border-[3px] left-1/2 -translate-x-1/2 border-[#ffe578] bg-black z-10 hover:scale-125 ease-in-out duration-150"></div>
      <a target="_blank" href={link} className="w-full flex justify-center">
        <div className="relative group tablet:hover:scale-110 ease-in-out duration-200">
          <span className=' text-black text-xs tablet:text-base tablet:group-hover:-top-10 ease-jump duration-200 bg-[#ffe578] flex px-4 py-2 rounded w-max items-center absolute tablet:top-5 gap-1 tablet:left-1/2 tablet:-translate-x-1/2 tablet:after:content-[""] tablet:after:w-4 after:h-4 tablet:after:bg-inherit tablet:after:absolute tablet:after:left-1/2 tablet:after:-translate-x-1/2 tablet:after:rotate-45 tablet:after:-bottom-2 translate-x-1/2 right-1/2 -translate-y-8 tablet:-translate-y-0'>
            {name}
            <MdOutlineExitToApp />
          </span>
          <img
            className="tablet:max-w-[400px] max-w-[275px]  mr-auto relative drop-shadow-[0_0px_100px_rgba(59,130,246,0.6)]"
            src={image}
            alt=""
          />
        </div>
      </a>
    </div>
  );
};

export default ShowWorkR;
