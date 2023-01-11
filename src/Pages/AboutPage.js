import React from "react";
import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
// import components
import Footer from "../Components/Footer";

import bg2 from "../assets/images/image_1.jpg";
import About from "../Components/About";
import RoutePageHead from "../Components/RoutePageHead";

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
      >
        <TopBar />
        <Navbar />
        
        <div >
          <RoutePageHead heading="About us" subheading="about"  />
        </div>
      </div>
        <About />
      <hr />
      <div className='mt-20'>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
