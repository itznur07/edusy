import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// --> import images
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
// --> import icons
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl:true,
  };

  return (
    <>
      <div className='h-screen mt-24'>
        <div className='mx-28 '>
          {/* content */}
          <div>
            {/* content heading */}
            <div className='text-center space-y-4'>
              <h4 className='text-md text-[#1eb2a6] font-bold uppercase'>
                Testimonial
              </h4>
              <h1 className='text-4xl text-[#323232] font-bold'>
                Our Successful Students
              </h1>
            </div>
            {/* content heading */}
            {/* content card */}
            <div className='mt-40'>
              <div className=''>
                <Slider
                  className='flex items-center justify-between'
                  {...settings}
                >
                  <div>
                    <TestimonialCard
                      image={person1}
                      name='ROGER SCOTT'
                      title='MARKETING MANAGER'
                      review='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    />
                  </div>
                  <div>
                    <TestimonialCard
                      image={person2}
                      name='ROGER SCOTT'
                      title='MARKETING MANAGER'
                      review='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    />
                  </div>
                  <div>
                    {" "}
                    <TestimonialCard
                      image={person3}
                      name='ROGER SCOTT'
                      title='MARKETING MANAGER'
                      review='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    />
                  </div>
                  {/*  */}
                  <div>
                    <TestimonialCard
                      image={person3}
                      name='ROGER SCOTT'
                      title='MARKETING MANAGER'
                      review='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    />
                  </div>
                  <div>
                    <TestimonialCard
                      image={person1}
                      name='ROGER SCOTT'
                      title='MARKETING MANAGER'
                      review='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    />
                  </div>
                  <div>
                    {" "}
                    <TestimonialCard
                      image={person2}
                      name='ROGER SCOTT'
                      title='MARKETING MANAGER'
                      review='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    />
                  </div>
                </Slider>
              </div>
            </div>
            {/* flex items-center justify-between mt-24 mb-28 space-x-5 */}
            {/* content card */}
          </div>
          {/* content */}
        </div>
      </div>
    </>
  );
};

// ----> Testimonial Cart Component <----- //

const TestimonialCard = ({ image, name, title, review }) => (
  <div className='w-96 shadow-md'>
    <div className='mx-2 my-2 px-5 py-6'>
      {/* card top */}
      <div className='flex items-center space-x-4'>
        <div className='relative'>
          <img
            className='w-16 rounded-full '
            src={image}
            alt='student-review-img'
          />
          <span className='text-[#fff] text-2xl p-1 rounded-full absolute bottom-0 right-0 bg-[#1eb2a6]'>
            <RiDoubleQuotesL />
          </span>
        </div>
        <div className='flex flex-col space-y-2'>
          <span className='text-lg text-[#323232] font-bold'>{name}</span>
          <span className='text-sm text-[#1eb2a6] font-semibold'>{title}</span>
        </div>
      </div>
      {/* card top */}
      {/* card bottom */}
      <div className='mt-12'>
        <p className='text-slate-500 font-medium'>{review}</p>
      </div>
      {/* card bottom */}
    </div>
  </div>
);

export default Testimonial;
