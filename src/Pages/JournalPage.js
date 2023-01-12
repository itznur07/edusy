import React from "react";
import BlogCard from "../Components/BlogCard";


// import images
import { default as image1 } from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.jpg';
import image3 from '../assets/images/image_3.jpg';
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import RouteHead from "./RouteHead";

const JournalPage = () => {
  return (
    <>
       {/* page head */}
       <RouteHead headingtext="Our Blogs" subheadingtext="blog" />
      {/* page head */}
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
      <Newsletter />
      <Footer/>
    </>
  );
};

export default JournalPage;
