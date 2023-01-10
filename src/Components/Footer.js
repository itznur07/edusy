import React from "react";

// import images
import image1 from "../assets/images/image_1.jpg";
import image2 from "../assets/images/image_2.jpg";
import image3 from "../assets/images/image_3.jpg";

// import icons
import { FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <div className='h-96'>
        <div className='mx-24 flex  justify-between mt-20 cursor-pointer'>
          {/*  */}
          <div>
            <div>
              <h1 className='text-3xl font-bold uppercase text-[#1EB2A6] last:text-white cursor-pointer'>
                Edusy
              </h1>
              <p className='text-sm text-[#1EB2A6]'>
                ONLINE EDUCATION & LEARNING
              </p>
            </div>
            <div className='mt-10'>
              <p>
                A small river named Duden flows by <br /> their place and
                supplies it with the <br /> necessary regelialia.
              </p>
            </div>
            <div className='flex items-center space-x-3 mt-8 cursor-pointer'>
              <span className='bg-[#1EB2A6] text-[#fff] px-4 py-3 rounded-full '>
                <i className='fab fa-youtube'></i>
              </span>
              <span className='bg-[#1EB2A6] text-[#fff] px-4 py-3 rounded-full'>
                <i className='fab fa-twitter'></i>
              </span>
              <span className='bg-[#1EB2A6] text-[#fff] px-4 py-3 rounded-full'>
                <i className='fab fa-instagram'></i>
              </span>
            </div>
          </div>
          {/* Explore */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-xl font-bold text-[#383838]'>Explore</h1>
            </div>
            <div className='space-y-4'>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  About us
                </span>
              </div>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Services
                </span>
              </div>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Courses
                </span>
              </div>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Blogs
                </span>
              </div>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Contact us
                </span>
              </div>
            </div>
          </div>
          {/* Quick link */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-xl font-bold text-[#383838]'>Quick Links</h1>
            </div>
            <div className='space-y-4'>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Contact us
                </span>
              </div>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Pricing
                </span>
              </div>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Trems & Conditions
                </span>
              </div>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Feedbacks
                </span>
              </div>
              <div className='space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>&rarr;</span>{" "}
                <span className='text-md text-[#393939] font-medium'>
                  Privasy
                </span>
              </div>
            </div>
          </div>
          {/* resent post */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-xl font-bold text-[#383838]'>Recent Posts</h1>
            </div>
            <div className='space-y-8'>
              <div className='flex space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>
                  <img className='w-12 rounded-sm' src={image1} alt='f-img' />
                </span>{" "}
                <span className='text-sm text-[#393939] '>
                  <div className='flex items-center justify-between space-x-2 my-2'>
                    <div className='flex space-x-2 items-center '>
                      <span className='text-[#1eb2a6]'>
                        <FaUserAlt />
                      </span>
                      <span className='text-slate-600 text-sm '>Admin</span>
                    </div>
                    <div className='flex space-x-2 items-center '>
                      <span className='text-[#1eb2a6]'>
                        <SlCalender />
                      </span>
                      <span className='text-slate-600 text-sm '>
                        JAN. 18, 2021
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className='flex space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>
                  <img className='w-12 rounded-sm' src={image2} alt='f-img' />
                </span>{" "}
                <span className='text-sm text-[#393939]'>
                  <div className='flex items-center justify-between space-x-2 my-2'>
                    <div className='flex space-x-2 items-center '>
                      <span className='text-[#1eb2a6]'>
                        <FaUserAlt />
                      </span>
                      <span className='text-slate-600 text-sm '>Admin</span>
                    </div>
                    <div className='flex space-x-2 items-center '>
                      <span className='text-[#1eb2a6]'>
                        <SlCalender />
                      </span>
                      <span className='text-slate-600 text-sm f'>
                        JAN. 18, 2021
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className='flex space-x-2'>
                <span className='text-[#1EB2A6] text-sm'>
                  <img className='w-12 rounded-sm' src={image3} alt='f-img' />
                </span>{" "}
                <span className='text-sm text-[#393939] font-medium'>
                  <div className='flex items-center justify-between space-x-2 my-2'>
                    <div className='flex space-x-2 items-center '>
                      <span className='text-[#1eb2a6]'>
                        <FaUserAlt />
                      </span>
                      <span className='text-slate-600 text-sm '>Admin</span>
                    </div>
                    <div className='flex space-x-2 items-center '>
                      <span className='text-[#1eb2a6]'>
                        <SlCalender />
                      </span>
                      <span className='text-slate-600 text-sm '>
                        JAN. 18, 2021
                      </span>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
