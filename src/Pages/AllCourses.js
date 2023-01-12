import React from "react";

// import needed component
import CourseCard from "../Components/CourseCard";
import Footer from "../Components/Footer";
import RouteHead from "./RouteHead";

// icons
import { FaFigma, FaWordpress } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiBmcsoftware,
  SiVisualstudiocode
} from "react-icons/si";
import Newsletter from "../Components/Newsletter";

const AllCourses = () => {
  return (
    <>
      {/* page head */}
      <RouteHead headingtext='All Courses' subheadingtext='courses' />
      {/* page head */}
      <div className='pb-20'>
        <div className='mx-24 flex items-center justify-between flex-wrap py-24'>
          <CourseCard
            icon={<SiBmcsoftware />}
            title='Basic Fundamentals for Software Engineering'
          />
          <CourseCard
            icon={<SiAdobephotoshop />}
            title='Enhancing Adobe Photoshop CC 2020 Skills'
          />
          <CourseCard
            icon={<SiVisualstudiocode />}
            title='HTML, CSS, and Javascript for Web Developers'
          />
          <CourseCard
            icon={<FaWordpress />}
            title='Introducing to Programming with WordPress'
          />
          <CourseCard
            icon={<FaFigma />}
            title='Figma Begainer to Advanced UI & UX Design'
          />
          <CourseCard
            icon={<FaWordpress />}
            title='HTML, CSS, and Javascript for Web Developers'
          />
          <CourseCard
            icon={<SiVisualstudiocode />}
            title='HTML, CSS, and Javascript for Web Developers'
          />
          <CourseCard
            icon={<SiBmcsoftware />}
            title='Basic Fundamentals for Software Engineering'
          />
          <CourseCard
            icon={<SiAdobephotoshop />}
            title='Enhancing Adobe Photoshop CC 2020 Skills'
          />
        </div>
        {/* Paginations */}
        <div className='flex justify-center items-center space-x-2 cursor-pointer'>
          <div className='px-4 py-1.5 bg-[#ffffff] hover:bg-[#1eb2a6] hover:text-[#fff] transition ease-linear duration-200 border shadow-sm rounded-md '>
            &larr;
          </div>
          <div className='px-4 py-1.5 bg-[#1eb2a6] text-white transition ease-linear duration-200  border shadow-sm rounded-md '>
            1
          </div>
          <div className='px-4 py-1.5 bg-[#ffffff] hover:bg-[#1eb2a6] hover:text-[#fff] transition ease-linear duration-200  border shadow-sm rounded-md '>
            2
          </div>
          <div className='px-4 py-1.5 bg-[#ffffff] hover:bg-[#1eb2a6] hover:text-[#fff] transition ease-linear duration-200  border shadow-sm rounded-md '>
            3
          </div>
          <div className='px-4 py-1.5 bg-[#ffffff] hover:bg-[#1eb2a6] hover:text-[#fff] transition ease-linear duration-200  border shadow-sm rounded-md '>
            4
          </div>
          <div className='px-4 py-1.5 bg-[#ffffff] hover:bg-[#1eb2a6] hover:text-[#fff] transition ease-linear duration-200  border shadow-sm rounded-md '>
            5
          </div>
          <div className='px-4 py-1.5 bg-[#ffffff] hover:bg-[#1eb2a6] hover:text-[#fff] transition ease-linear duration-200  border shadow-sm rounded-md '>
            &rarr;
          </div>
        </div>
        {/* Footer */}
        <div className="mt-28">
        <Newsletter/>
        <Footer />
        </div>
      </div>
    </>
  );
};

export default AllCourses;
