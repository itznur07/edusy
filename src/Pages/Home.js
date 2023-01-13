import React from "react";
import bg from "../assets/images/bg_1.jpg";
import About from "../Components/About";
import BannerContent from "../Components/BannerContent";
import Blogs from "../Components/Blogs";
import BrowseCouse from "../Components/BrowseCouses";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import PopularCourse from "../Components/PopularCourse";
import Pricing from "../Components/Pricing";
import Summery from "../Components/Summery";
import Testimonial from "../Components/Testimonial";
import TopBar from "../Components/TopBar";

import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {/* TopBar and Navbar */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.li style={{ scaleX }} className='progress-bar'></motion.li>
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
      <BrowseCouse />
      {/* Testimonial Component */}
      <Testimonial />
      {/* Our Blog Component */}
      <Blogs />
      {/* Our Pricing Component */}
      <Pricing />
      {/* Newsletter component design */}
      <Newsletter />
      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Home;
