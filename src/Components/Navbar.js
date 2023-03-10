import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className='mx-24'>
        <div className='flex items-center justify-between px-6 py-6 bg-[#fff] bg-opacity-10 cursor-pointer'>
          <nav>
            <ul className='flex items-center space-x-14 text-white text-base font-medium'>
              <Link to='/'>
                <li className='text-[#1EB2A6]'>Home</li>
              </Link>
              <Link to='/courses'>
                <li>All Courses</li>
              </Link>
              <Link to='/about'>
                <li>About</li>
              </Link>
              <Link to='/teams'>
                {" "}
                <li>Team</li>
              </Link>
              <Link to='/pricing'>
                {" "}
                <li>Pricing</li>
              </Link>
              <Link to='/blogs'>
                {" "}
                <li>Journal</li>
              </Link>
              <Link to='/contact'>
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          <div>
            <p className='text-md text-[#1eb2a6] text-xl font-bold'>
              Get Certificate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
