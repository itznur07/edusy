import React from "react";
import { Link } from "react-router-dom";

const RoutePageHead = ({heading, subheading}) => {
  return (
    <>
      <div className='my-36 inset-0 flex flex-col items-center justify-center space-y-3'>
        <span className='text-[#f8f8f8] hover:text-[#1eb2a6] text-md font-bold cursor-pointer'>
          <Link to='/'>Home > </Link>
          {subheading}{" "}
        </span>
        <h1 className='text-7xl text-[#ffffff] font-semibold'>{heading}</h1>
      </div>
    </>
  );
};

export default RoutePageHead;
