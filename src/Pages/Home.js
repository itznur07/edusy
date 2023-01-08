import React from "react";
import BannerContent from "../Components/BannerContent";
import CourseCard from "../Components/CourseCard";
import Navbar from "../Components/Navbar";
import Summery from "../Components/Summery";
import TopBar from "../Components/TopBar";
import About from "./About";

const Home = () => {
  return (
    <>
      {/* TopBar and Navbar */}
      <div
        style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/academia/images/bg_1.jpg")`,
          backgroundSize: "cover",
          width: "100%",
          height: "140vh",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* header */}
        <TopBar />
        <Navbar />
        <BannerContent />
      </div>
      {/* About */}
      <About />
      {/* Sammery */}
      <Summery />
      {/* Course Cards */}
      <CourseCard />
    </>
  );
};

export default Home;
