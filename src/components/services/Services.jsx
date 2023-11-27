import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.79,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      whileInView={'animate'}
    >
      <motion.div
        className='textContainer'
        variants={variants}
      >
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div
        className='titleContainer'
        variants={variants}
      >
        <div className='title'>
          <img
            src='people.webp'
            alt=''
          />
          <h1>
            <motion.b
              whileHover={{ color: 'orange', transition: { duration: 0.3 } }}
            >
              Unique
            </motion.b>{' '}
            Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b
              whileHover={{ color: 'orange', transition: { duration: 0.3 } }}
            >
              For Your
            </motion.b>{' '}
            Business.
          </h1>
          <button>
            <a href='#Portfolio'>WHAT WE DO?</a>
          </button>
        </div>
      </motion.div>
      <motion.div
        className='listContainer'
        variants={variants}
      >
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
