import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='mx-24'>
        <div className='flex items-center justify-between px-6 py-6 bg-[#fff] bg-opacity-10 cursor-pointer'>
            <nav>
                <ul className='flex items-center space-x-14 text-white text-base font-medium'>
                    <li className='text-[#1EB2A6]'>Home</li>
                    <li>All Courses</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Pricing</li>
                    <li>Journal</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div ><p className='text-base text-[#1eb2a6] text-lg font-bold rounded-md'>Get Certificate</p></div>
        </div>
    </div>
    </>
  )
}

export default Navbar