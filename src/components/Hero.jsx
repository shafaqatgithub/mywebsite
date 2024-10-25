import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center px-10 relative' id="home">
      <div className='text-center'>
        <h1 className='text-4xl sm:text-5xl font-bold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>I'm a</span><br />
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Webdesigner",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className='sm:text-lg my-6 lg:text-xl'>My name is Shafaqat. I specialize in building modern and responsive web applications.</p>
        <div className='my-8 flex justify-center'>
          <a href="#projects" className='px-6 py-3 w-auto rounded-xl mr-4 bg-gradient-to-r from-orange-500 to-pink-500'>See my work</a>
          <a href="#contact" className='px-6 py-3 w-auto rounded-xl mr-4 border border-pink-500'>Contact</a>
        </div>
      </div>

      <div className='absolute bottom-24 right-10 flex flex-col items-center gap-2 md:bottom-40 md:right-20 md:gap-6'>
        <a href='https://www.linkedin.com/in/shafaqat-arif/' target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-blue-600'>
          <FaLinkedin size={20} color='orange'/>
        </a>
        <a href='https://github.com/shafaqatgithub' target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-black mt-2'>
          <FaGithub size={20} color='orange' />
        </a>
        <a href='https://dribbble.com/Shafaqat_M' target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-black mt-2'>
          <FaDribbble size={20} color='orange' />
        </a>
      </div>
    </div>
  );
};

export default Hero;
