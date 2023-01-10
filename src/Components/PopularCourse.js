import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CourseCard from "./CourseCard";

// icons
import { FaFigma, FaWordpress } from "react-icons/fa";
import { SiAdobephotoshop, SiBmcsoftware, SiVisualstudiocode } from "react-icons/si";


const PopularCourse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
  };
  return (
    <>
      <div className='h-screen '>
        <div className='mx-28'>
          {/* content */}
          <div>
            {/* content heading */}
            <div className='text-center space-y-4'>
              <h4 className='text-md text-[#1eb2a6] font-bold uppercase'>
                COURSES
              </h4>
              <h1 className='text-4xl text-[#323232] font-bold'>
              Browse Our Online Courses
              </h1>
            </div>
            {/* content heading */}
            {/* content card */}
            <div className="mt-16 cursor-pointer">
            <Slider {...settings} >
              <CourseCard icon={<SiBmcsoftware/>} title="Basic Fundamentals for Software Engineering" />
              <CourseCard icon={<SiAdobephotoshop/>} title="Enhancing Adobe Photoshop CC 2020 Skills"/>
              <CourseCard icon={<SiVisualstudiocode/>} title="HTML, CSS, and Javascript for Web Developers"/>
              <CourseCard icon={<FaWordpress/>} title="Introducing to Programming with WordPress" />
              <CourseCard icon={<FaFigma/>} title="Figma Begainer to Advanced UI & UX Design"/>
            </Slider>
            </div>
            {/* flex items-center justify-between mt-24 mb-28 space-x-5 */}
            {/* content card */}
          </div>
          {/* content */}
        </div>
      </div>
    </>
  );
};

export default PopularCourse;
