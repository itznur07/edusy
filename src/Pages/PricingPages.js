import React from "react";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import PricingCard from "../Components/PricingCard";
import RouteHead from "./RouteHead";

const PricingPages = () => {
  return (
    <>
      {/* page head */}
      <RouteHead headingtext='Pricing Packages' subheadingtext='pricing' />
      {/* page head */}
      <div>
        <div className='mx-24 mt-24 flex items-center justify-between py-6 pb-6'>
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
      </div>
      {/* footer */}
      <div className="mt-20">
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default PricingPages;
