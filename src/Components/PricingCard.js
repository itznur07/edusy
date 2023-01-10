import React from "react";

// icons
import { FaDollarSign } from "react-icons/fa";

const PricingCard = ({ plan, price, desc }) => {
  return (
    <>
      <div className='w-72 h-auto shadow py-10 text-center px-6 space-y-12 '>
        <div className='space-y-5'>
          <h3 className='text-md text-[#383838] font-bold'>{plan}</h3>
          <h1 className='text-5xl text-[#1eb2a6] font-bold relative'>
            <span className='text-[#a1a1a1] mb-5 text-2xl absolute top-0 left-9'>
              <FaDollarSign />
            </span>
            {price}
          </h1>
        </div>
        <div>
          <p className='text-md text-[#868686] font-medium leading-relaxed'>
            {desc}
          </p>
        </div>
        <div>
          <span className='uppercase text-sm font-bold text-[#1eb2a6] cursor-pointer px-10 py-3.5 border border-[#1eb2a6] rounded-sm hover:bg-[#1eb2a6] hover:text-white transition ease-linear duration-200'>
            Get Strated
          </span>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
