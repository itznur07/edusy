import React from "react";

// import react icons
import { FaTelegramPlane } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <>
      <div className='h-44 bg-[#1eb2a6]'>
        <div className='mx-24 pt-16 flex items-center justify-around'>
            <div className="space-y-3">
                <h1 className="text-3xl text-white font-bold">Newsletter - Stay tune and get the latest update</h1>
                <p className="text-sm text-[#f8f8f8] text-semibold">Far far away, behind the word mountains</p>
            </div>
            <div className="flex">
                <input className="border-b placeholder-white outline-none bg-transparent pr-10 py-1" type="text" placeholder="Enter email address" name="" id="" />
                <span className="text-white mt-2 cursor-pointer"><FaTelegramPlane/></span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
