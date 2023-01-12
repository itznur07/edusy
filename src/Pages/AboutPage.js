import React from "react";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import RouteHead from "./RouteHead";

const AboutPage = () => {
  return (
    <>
      {/* page head */}
      <RouteHead headingtext="About us" subheadingtext="about" />
      {/* page head */}
        <About />
      <hr />
      <div className='mt-20'>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
