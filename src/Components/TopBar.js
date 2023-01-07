import React from "react";

const TopBar = () => {
  return (
    <>
      <div
        
      >
        <div className='mx-24'>
          <div className='flex items-center justify-between space-x-24 py-6'>
            {/* sec 1 */}
            <div>
              <h1 className='text-3xl font-bold uppercase text-white cursor-pointer'>Edusy</h1>
              <p className='text-sm text-white'>ONLINE EDUCATION & LEARNING</p>
            </div>
            {/* sec 2 */}
            <div className='flex items-center space-x-3 text-white'>
              <span className='text-4xl'>
                <i className='fas fa-clock'></i>
              </span>
              <div>
                <span className='text-md'>Monday - Friday</span>
                <br />
                <strong>8:00AM-8:00PM</strong>
              </div>
            </div>
            {/* sec 3 */}
            <div className='flex items-center space-x-3 text-white'>
              <span className='text-4xl'>
                <i className='fas fa-phone'></i>
              </span>
              <div>
                <span className='text-md'>Call Us</span>
                <br />
                <strong>+2 392 3929 210</strong>
              </div>
            </div>
            {/* sec 4 */}
            <div className='space-x-6 text-md cursor-pointer'>
              <span className='bg-[#fff] hover:bg-[#1EB2A6] bg-opacity-30 hover:text-white text-[#1EB2A6] px-4 py-2.5 rounded-full transition ease-linear duration-300'>
                <i class='fa-brands fa-facebook-f'></i>
              </span>
              <span className='bg-[#fff] hover:bg-[#1EB2A6] bg-opacity-30 hover:text-white text-[#1EB2A6] px-4 py-3 rounded-full transition ease-linear duration-300 '>
                <i className='fab fa-youtube'></i>
              </span>
              <span className='bg-[#fff] hover:bg-[#1EB2A6] bg-opacity-30 hover:text-white text-[#1EB2A6] px-4 py-3 rounded-full transition ease-linear duration-300 '>
                <i className='fab fa-twitter'></i>
              </span>
              <span className='bg-[#fff] hover:bg-[#1EB2A6] bg-opacity-30 hover:text-white text-[#1EB2A6] px-4 py-3 rounded-full transition ease-linear duration-300 '>
                <i className='fab fa-instagram'></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
