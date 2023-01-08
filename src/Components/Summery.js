import React from "react";

// import bg image
import summeryBg from "../assets/images/bg_3.jpg";
// react icon
import { FaRegCalendarAlt, FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { SiCoursera } from "react-icons/si";

const Summery = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${summeryBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "35vh",
          backgroundColor: "#333333",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className='flex items-center justify-between mx-24 py-24'>
          <SummeryCard icon={<FaUserGraduate/>} title="SUCCESS STORIES" total="3,000" />
          <SummeryCard icon={<GiTeacher />} title="TRUSTED TUTORS" total="320" />
          <SummeryCard icon={<FaRegCalendarAlt/>} title="SCHEDULES" total="1,000" />
          <SummeryCard icon={<SiCoursera/>} title="COURSES" total="587" />
        </div>
      </div>
    </>
  );
};

// Summery child component

const SummeryCard = ({icon, title, total}) => {
  return (
    <>
      <div className='flex items-center space-x-5'>
        <div className="text-5xl text-[#1eb2a6]">
          {icon}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">{total}</h1>
          <h4 className="text-md font-medium text-[#f8f8f8]">{title}</h4>
        </div>
      </div>
    </>
  );
};

export default Summery;
