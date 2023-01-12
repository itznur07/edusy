import React from "react";
import Navbar from "../Components/Navbar";
import RoutePageHead from "../Components/RoutePageHead";
import TopBar from "../Components/TopBar";

import bg2 from "../assets/images/image_2.jpg";

const RouteHead = ({ headingtext, subheadingtext }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          backgroundColor: "#323232",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <TopBar />
        <Navbar />
        <RoutePageHead heading={headingtext} subheading={subheadingtext} />
      </div>
    </>
  );
};

export default RouteHead;
