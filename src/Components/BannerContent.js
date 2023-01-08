import React from "react";

const BannerContent = () => {
  return (
    <>
      <div className="my-28">
        <div className="mx-24">
        <h5 className="text-xl uppercase text-[#ffffffb3] font-bold mb-3">WELCOME TO Edusy</h5>
        <h1 className="text-5xl text-[#fff] captalize font-bold mb-8">Best Online Education <br/> Expertise</h1>
        <p className="mb-4 text-[#ffffffcc] text-md">Far far away, behind the word mountains, far from the countries Vokalia <br/> and Consonantia, there live the blind texts.</p>
        <div className="mt-4 space-x-4">
            <button className="px-7 py-3.5 rounded-md bg-[#1EB2A6] text-white font-medium shadow-md hover:shadow-none">Get Started Now &#x2192;</button>
            <button className="px-7 py-3.5 rounded-md bg-[#fff] text-[#1eb2a6] font-medium shadow-md  hover:shadow-none ">View Courses &#x2192;</button>
        </div>
        </div>
      </div>
    </>
  );
};



export default BannerContent;
