import React from "react";
import { MdOutlineExitToApp } from "react-icons/md";

const ShowWorkL = ({bracket,description, image, link, name, arr}) => {
  return (
    <div className="flex flex-col tablet:flex-row gap-5 tablet:gap-[80px] items-center tablet:mt-12 mt-6 relative tablet:mb-0 mb-12">
       <div className="tablet:block hidden h-[1px] left-1/4 right-1/2 bg-[#fc815c] absolute top-1/2 "></div>
       <div className="tablet:block hidden w-5 h-5 rounded-full absolute border-[3px] left-1/2 -translate-x-1/2 border-[#fc815c] bg-black z-10 hover:scale-125 ease-in-out duration-150"></div>
      <a target="_blank" href={link} className="w-full flex justify-center relative">
        <div className="relative group tablet:hover:scale-110 ease-in-out duration-200">
          <span className='text-xs tablet:text-base tablet:group-hover:-top-10 ease-jump duration-200 bg-[#fc815c] flex px-4 py-2 rounded w-max items-center absolute tablet:top-5 gap-1 tablet:left-1/2 tablet:-translate-x-1/2 tablet:after:content-[""] tablet:after:w-4 tablet:after:h-4 tablet:after:bg-inherit tablet:after:absolute tablet:after:left-1/2 tablet:after:-translate-x-1/2 tablet:after:rotate-45 tablet:after:-bottom-2 translate-x-1/2 right-1/2 -translate-y-8 tablet:-translate-y-0 '>
            {name}
            <MdOutlineExitToApp />
          </span>
          <img
            className="tablet:max-w-[400px] max-w-[275px] mr-auto relative drop-shadow-[0_0px_100px_rgba(59,130,246,0.6)]"
            src={image}
            alt=""
          />
        </div>
      </a>
     
      <div className="w-full">
        <h3 className="text-[#fc815c] font-bold text-2xl table:text-4xl">{name}</h3>
        <span className="text-[#fc815c] tablet:text-lg">({bracket})</span>
        <p className="text-justify tablet:text-md text-sm mt-2">
          {description}
        </p>

        <ul className="flex flex-wrap tablet:gap-2 gap-1 table:text-md text-sm mt-2">
        {
            arr.map((item,index)=>(
              <li key={index} className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #{item}
              </li>

            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default ShowWorkL;
