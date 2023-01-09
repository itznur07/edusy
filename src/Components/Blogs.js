import React from "react";
import BlogCard from "./BlogCard";

// import images
import image1 from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.jpg';
import image3 from '../assets/images/image_3.jpg';

const Blogs = () => {
  return (
    <>
      <div className='h-screen '>
        <div className='mx-28'>
          {/* content */}
          <div>
            {/* content heading */}
            <div className='text-center space-y-4'>
              <h4 className='text-md text-[#1eb2a6] font-bold uppercase'>
                Our Blog
              </h4>
              <h1 className='text-4xl text-[#323232] font-bold'>
                Recent From Blog
              </h1>
            </div>
            {/* content heading */}
            {/* content card */}
                <div className="flex items-center justify-between space-x-5 mt-28">
                    <BlogCard image={image1} title="Build your Dream Software & Engineering Career" desc="A small river named Duden flows by their place and supplies it with the necessary regelialia." />
                    <BlogCard image={image2} title="Build your Dream Software & Engineering Career" desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."/>
                    <BlogCard image={image3} title="Build your Dream Software & Engineering Career" desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."/>
                </div>
            {/* content card */}
          </div>
          {/* content */}
        </div>
      </div>
    </>
  );
};

export default Blogs;
