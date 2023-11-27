import './hero.scss';
import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const sliderVariants2 = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>José Ángel Bravo</motion.h2>
          <motion.h1 variants={textVariants}>
            Game/Web developer and UI designer
          </motion.h1>
          <motion.div
            variants={textVariants}
            className='buttons'
          >
            <motion.button variants={textVariants}>
              <a href='#Portfolio1'>See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}>
              {' '}
              <a href='#Contact'>Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='/scroll.png'
            alt=''
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Writer Content Creator Influencer
      </motion.div>
      <motion.div
        className='imageContainer'
        variants={sliderVariants2}
        initial='initial'
        animate='animate'
      >
        <img
          src='/moon.png'
          alt=''
        />
      </motion.div>
    </div>
  );
};

export default Hero;
