import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <>
      <div className='h-screen '>
        <div className='mx-28'>
          {/* content */}
          <div className='mt-20'>
            {/* content heading */}
            <div className='text-center space-y-4'>
              <h4 className='text-md text-[#1eb2a6] font-bold uppercase'>
                Our Pricing
              </h4>
              <h1 className='text-4xl text-[#323232] font-bold'>
                Pricing & Packages
              </h1>
            </div>
            {/* content heading */}
            {/* content card */}
            <div className='flex items-center justify-between mt-24'>
              <PricingCard
                plan='BASIC PLAN'
                price='49.0K'
                desc='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
              />
              <PricingCard
                plan='BEGINNER PLAN'
                price='79.0K'
                desc='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
              />
              <PricingCard
                plan='PREMIUM PLAN'
                price='109K'
                desc='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
              />
              <PricingCard
                plan='ULTIMATE PLAN'
                price='149K'
                desc='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
              />
            </div>
            {/* content card */}
          </div>
          {/* content */}
        </div>
      </div>
    </>
  );
};

export default Pricing;
