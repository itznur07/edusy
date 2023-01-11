import React from "react";

// images
import authorImg from "../assets/images/author-1.jpg";
// icons
import { FaStar } from "react-icons/fa";

const CourseCard = ({icon , title}) => {
  return (
    <>
      <div className='w-1/3 sm:w-96 bg-white shadow-sm rounded-sm justify-center palce-content-center mt-5 '>
        {/* content */}
        <div className='py-7 px-7'>
          {/* card top */}
          <div className='flex space-x-5'>
            <span className=' text-[#1eb2a6] rounded-full text-5xl'>
              {icon}
            </span>
            <div className=''>
              <h1 className='text-2xl text-[#383838] font-semibold'>
                {title}
              </h1>
              {/* reating */}
              <div className='flex items-center space-x-1 text-[#1eb2a6] mt-4'>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>(5.0)</span>
              </div>
              {/* reating */}
              {/* author */}
              <div className='flex items-center space-x-2 mt-2'>
                <img
                  className='w-10 rounded-full'
                  src={authorImg}
                  alt='author'
                />
                <span className='text-gray'>by John Smith</span>
              </div>
              {/* author */}
              {/* course caption */}
              <p className='text-[#1eb2a6]'>50 lectures (190 hrs)</p>
            </div>
          </div>
          {/* card top */}
          {/* course price button */}
          <h5 className='text-center mt-8 text-[#1eb2a6] text-md font-semibold bg-slate-100 py-4 px-2 rounded-sm'>
            $100 All Course / $15 per month
          </h5>
          <br />
          {/* Enroll button */}
          <h4 className='uppercase text-center text-white text-md font-semibold bg-[#1eb2a6] py-4 px-2 rounded-sm cursor-pointer shadow-md hover:shadow-none transition ease-linear duration-100'>
            Enroll Now!
          </h4>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
