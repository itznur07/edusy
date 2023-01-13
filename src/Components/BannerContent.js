import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const BannerContent = () => {
  return (
    <>
      <div className='my-28'>
        <motion.div
          className='mx-24'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.h5 variants={item} className='text-xl uppercase text-[#ffffffb3] font-bold mb-3'>
            WELCOME TO Edusy
          </motion.h5>
          <motion.h1 variants={item} className='text-5xl text-[#fff] captalize font-bold mb-8'>
            Best Online Education <br /> Expertise
          </motion.h1>
          <motion.p variants={item} className='mb-4 text-[#ffffffcc] text-md'>
            Far far away, behind the word mountains, far from the countries
            Vokalia <br /> and Consonantia, there live the blind texts.
          </motion.p>
          <div className='mt-4 space-x-4'>
            <motion.button variants={item} className='px-7 py-3.5 rounded-md bg-[#1EB2A6] text-white font-medium shadow-md hover:shadow-none'>
              Get Started Now &#x2192;
            </motion.button>
            <Link to='/courses'>
              <motion.button variants={item} className='px-7 py-3.5 rounded-md bg-[#fff] text-[#1eb2a6] font-medium shadow-md  hover:shadow-none '>
                View Courses &#x2192;
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BannerContent;
