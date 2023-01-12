import React from "react";
// import image
import aboutImg from '../assets/images/about.jpg';
// import icons

const About = () => {
  return (
    <>
      <div className='h-screen bg-[#f8f8f8]'>
        <div className='mx-24 '>
          <div className='flex justify-between'>
            {/* content left */}
            <div className=''
              style={{
                backgroundImage:`url(${aboutImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "70%",
                height: "100vh",
              }}>
            </div>
            {/* content right */}
            <div className='mt-20 mx-16 px-4 py-2'>
              <h3 className='text-lg text-[#1EB2A6] font-bold'>
                LEARN ANYTHING
              </h3>
              <h1 className='text-5xl text-[#323232] font-semibold leading-tight mt-3'>
                Benefits About Online Learning Expertise
              </h1>
              <div className='mt-9'>
                <ChildCard
                  icon={"fa-sharp fa-solid fa-chalkboard-user"}
                  title='Online Courses'
                  text='Far far away, behind the word mountains, far from the countries
                 Vokalia and Consonantia, there live the blind texts.'
                />
                <ChildCard
                  icon={"fa-sharp fa-solid fa-certificate"}
                  title='Earn Certificate'
                  text='Far far away, behind the word mountains, far from the countries
                 Vokalia and Consonantia, there live the blind texts.'
                />
                <ChildCard
                  icon={"fa-solid fa-person-chalkboard"}
                  title='Learn with Expart'
                  text='Far far away, behind the word mountains, far from the countries
                 Vokalia and Consonantia, there live the blind texts.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// About child card component

const ChildCard = ({ icon, title, text }) => {
  return (
    <div className='bg-[#fff] hover:bg-[#1EB2A6] group shadow-lg rounded-md mt-4 px-6 py-7 transition ease-linear duration-300 cursor-default'>
      <div className="flex items-center space-x-6">
      <div className="">
        <i className={`${icon} text-[#1EB2A6] group-hover:text-white text-5xl`}></i>
      </div>
      <div className="space-y-2 ">
        <h2 className="text-xl font-semibold group-hover:text-white">{title}</h2>
        <p className="text-sm leading-relaxed text-gray-400 group-hover:text-white">{text}</p>
      </div>
      </div>
    </div>
  );
};

export default About;
