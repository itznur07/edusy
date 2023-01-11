import React from "react";
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import PricingCard from "../Components/PricingCard";
import TopBar from "../Components/TopBar";

import bg2 from "../assets/images/image_1.jpg";
import RoutePageHead from "../Components/RoutePageHead";

const PricingPages = () => {
  return (
    <>
      <div>
        <div
          className='bg-[#f8f8f8]'
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
            backgroundAttachment: "fixed",
          }}
        >
            <TopBar />
            <Navbar />
            <RoutePageHead heading="Pricing Packages" subheading="pricing" />
        </div>
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
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default PricingPages;
