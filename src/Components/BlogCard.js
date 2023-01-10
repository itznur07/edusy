import React from "react";

// import icons
import { FaComment, FaUserAlt } from "react-icons/fa";
import { SlCalender } from 'react-icons/sl';

const BlogCard = ({ image, title, desc }) => {
  return (
    <div className='shadow-md w-auto h-auto pb-4 rounded-md'>
      <img  src={image} alt='not found' />
      <div className="mx-6 my-6">
        <div className='flex items-center justify-between space-x-2 my-2'>
          <div className="flex space-x-2 items-center ">
            <span className='text-[#1eb2a6]'><FaUserAlt/></span>
            <span className="text-slate-600 text-sm font-bold">Admin</span>
          </div>
          <div className="flex space-x-2 items-center ">
            <span className='text-[#1eb2a6]'><SlCalender/></span>
            <span className="text-slate-600 text-sm font-bold">JAN. 18, 2021</span>
          </div>
          <div className="flex space-x-2 items-center ">
            <span className='text-[#1eb2a6]'><FaComment/></span>
            <span className="text-slate-600 text-sm font-bold"> 3 COMMENTS</span>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-xl text-[#323232] leading-relaxed font-semibold">{title}</h1>
        </div>
        <div className="mt-5">
          <p className="text-md leading-relaxed text-slate-500 font-semibold">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
