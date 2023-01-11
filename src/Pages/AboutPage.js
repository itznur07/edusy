import React from "react";
import { Link } from "react-router-dom";

// import components
import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar";

// import needed images
import bg2 from "../assets/images/image_1.jpg";
import About from "../Components/About";

const AboutPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          backgroundAttachment: "fixed",
        }}
        className='relative'
      >
        <div>
          <TopBar />
          <Navbar />
        </div>

        <div className='absolute inset-0 flex flex-col items-center justify-center space-y-3'>
          <span className='text-[#f8f8f8] text-md font-bold cursor-pointer'>
            <Link to='/'>
              <a href='home' className='hover:text-[#1eb2a6]'>
                Home
              </a>
            </Link>{" "}
            About{" "}
          </span>
          <h1 className='text-7xl text-[#ffffff] font-semibold'>About us</h1>
        </div>
      </div>
      <div>
        <About />
      </div>
    </>
  );
};

export default AboutPage;
