import React from 'react'
import { CgArrowLongDown } from "react-icons/cg";

const LatestWorks = () => {
  return (
    <div className='self-center after:content-[""] after:absolute after:w-[1px] after:h-12 after:bg-[#444] after:-translate-x-1/2 after:left-1/2 after:-mt-2'>
      <a href='#works'  ><button className='group hover:scale-110 transition-all  bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] w-fit mx-auto text-[#b0b2c3] -translate-y-20'>Latest Works<CgArrowLongDown 
        className='absolute translate-x-1/2 right-1/2 group-hover:translate-y-3 transition-all w-20 group-hover:scale-150'/>
      </button></a>
      
    </div>
  )
}

export default LatestWorks
