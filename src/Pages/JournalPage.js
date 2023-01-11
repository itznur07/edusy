import React from "react";
import BlogCard from "../Components/BlogCard";
import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar";


// import images
import { default as bg2, default as image1 } from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.jpg';
import image3 from '../assets/images/image_3.jpg';
import Footer from "../Components/Footer";
import RoutePageHead from "../Components/RoutePageHead";


const JournalPage = () => {
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

          <TopBar />
          <Navbar />
        <div>
          <RoutePageHead heading="Our Blogs" subheading="blog"  />
        </div>
      </div>
      {/* Journal Card */}
      <div className='mx-24 my-24 flex flex-wrap items-center justify-between '>
        <BlogCard
          image={image1}
          title='Build your Dream Software & Engineering Career'
          desc='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        />
        <BlogCard
          image={image2}
          title='Build your Dream Software & Engineering Career'
          desc='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        />
        <BlogCard
          image={image3}
          title='Build your Dream Software & Engineering Career'
          desc='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        />
        <BlogCard
          image={image3}
          title='Build your Dream Software & Engineering Career'
          desc='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        />
        <BlogCard
          image={image3}
          title='Build your Dream Software & Engineering Career'
          desc='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        />
        <BlogCard
          image={image3}
          title='Build your Dream Software & Engineering Career'
          desc='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        />
      </div>
      {/* footer */}
      <Footer/>
    </>
  );
};

export default JournalPage;
