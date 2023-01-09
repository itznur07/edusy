import React from "react";
import BannerContent from "../Components/BannerContent";
import BrowseCouse from "../Components/BrowseCouses";
import Navbar from "../Components/Navbar";
import PopularCourse from "../Components/PopularCourse";
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
      {/* Popular Online courses */}
      <PopularCourse />
      {/* Browse Online Course Design */}
      <BrowseCouse/>
    </>
  );
};

export default Home;
