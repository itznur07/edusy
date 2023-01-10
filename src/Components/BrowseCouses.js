import React from "react";

//import react icons
import { AiFillDatabase } from "react-icons/ai";
import { BiMinusFront } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { MdDesignServices, MdOutlineColorLens } from "react-icons/md";
import { SiAdobe, SiAdobephotoshop, SiBmcsoftware } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { TbPolygon } from "react-icons/tb";

const BrowseCouse = () => {
  return (
    <>
      <div className='h-screen'>
        <div className='mx-28'>
          {/* content */}
          <div className="">
            {/* content heading */}
            <div className='text-center space-y-4 '>
              <h4 className='text-md text-[#1eb2a6] font-bold uppercase'>
                OUR COURSES
              </h4>
              <h1 className='text-4xl text-[#323232] font-bold'>
                Browse Our Online Courses
              </h1>
            </div>
            {/* content heading */}
            {/* content card */}
            <div className='mt-12'>
              <div className='flex items-ceter justify-between flex-wrap space-y-5'>
                <BrowseCourseCard icon={<MdDesignServices/>} title="UI & UX Design" courses="25 courses"/>
                <BrowseCourseCard icon={<MdOutlineColorLens/>} title="Ats & Design" courses="25 courses" />
                <BrowseCourseCard icon={<SiAdobephotoshop/>} title="Photoshop Basice to Expart" courses="25 courses"/>
                <BrowseCourseCard icon={<BiMinusFront />} title="Frontend Development" courses="25 courses"/>
                <BrowseCourseCard icon={<TbPolygon/>} title="Design Systems" courses="25 courses"/>
                <BrowseCourseCard icon={<SiBmcsoftware />} title="Software Development" courses="25 courses"/>
                <BrowseCourseCard icon={<FaFigma />} title="Figma Advanced Course" courses="25 courses"/>
                <BrowseCourseCard icon={<AiFillDatabase/>} title="Backend Development" courses="25 courses"/>
                <BrowseCourseCard icon={<SlSocialInstagram/>} title="Digital Marekting" courses="25 courses"/>
                <BrowseCourseCard icon={<SiAdobe />} title="Grapich Design" courses="25 courses"/>
              </div>
            </div>
            {/* content card */}
          </div>
          {/* content */}
        </div>
      </div>
    </>
  );
};

// Child Card Component
const BrowseCourseCard = ({icon , title, courses}) => {
  return (
    <>
      <div className='w-64 h-auto cursor-pointer group bg-white hover:bg-[#1eb2a6] shadow hover:shadow-none rounded-sm px-4 py-4 transition ease-linear duration-500'>
        <div className='flex mt-10 flex-col text-center items-center justify-center place-content-center space-y-6 '>
          <span className='text-[#1eb2a6] text-5xl group-hover:text-white'>
            {icon}
          </span>
          <div className='space-y-4'>
            <h1 className='text-2xl text-[#323232] group-hover:text-white font-bold'>
              {title}
            </h1>
            <div>
              <span className='bg-[#f8f8f8] group-hover:bg-[#fff] text-[#1eb2a6] font-semibold rounded-md px-3.5 py-1.5'>
                {courses}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseCouse;
