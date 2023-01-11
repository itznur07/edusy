import React from "react";
import bg2 from "../assets/images/image_1.jpg";
import Navbar from "../Components/Navbar";
import RoutePageHead from "../Components/RoutePageHead";
import TopBar from "../Components/TopBar";

const ContactPage = () => {
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
        {/* contact pages */}
        <TopBar />
        <Navbar />
        <RoutePageHead heading='Contact us' subheading='contact' />
        {/* contact pages */}
      </div>
    </>
  );
};

export default ContactPage;
