import React from "react";

const TeamCard = ({ image, name, title }) => {
  return (
    <div className='shadow-md mt-6 group relative'>
      <div>
        <img className='h-96' src={image} alt='team-images' />
      </div>
      <div className='py-10 text-center space-y-3 cursor-default  group-hover:bg-[#1eb2a6] transition ease-linear duration-300'>
        <h1 className='text-xl text-[#383838] font-semibold group-hover:text-[#ffffff]'>
          {name}
        </h1>
        <h3 className='text-sm text-[#868686] font-medium group-hover:text-[#ffffff]'>
          {title}
        </h3>
      </div>
      <div className='hidden group-hover:flex flex-col space-y-3 absolute top-24 left-2 cursor-pointer'>
        <span className='bg-[#323232] hover:bg-[#1EB2A6]  hover:text-white text-[#fff] px-4 py-3 rounded-full transition ease-linear duration-300 '>
          <i class='fa-brands fa-facebook-f'></i>
        </span>
        <span className='bg-[#323232] hover:bg-[#1EB2A6]  hover:text-white text-[#fff] px-4 py-3 rounded-full transition ease-linear duration-300 '>
          <i className='fab fa-youtube'></i>
        </span>
        <span className='bg-[#323232] hover:bg-[#1EB2A6]  hover:text-white text-[#fff] px-4 py-3 rounded-full transition ease-linear duration-300 '>
          <i className='fab fa-twitter'></i>
        </span>
        <span className='bg-[#323232] hover:bg-[#1EB2A6]  hover:text-white text-[#fff] px-4 py-3 rounded-full transition ease-linear duration-300 '>
          <i className='fab fa-instagram'></i>
        </span>
      </div>
    </div>
  );
};

export default TeamCard;
