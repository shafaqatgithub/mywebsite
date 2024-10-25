
import React from 'react';

const About = () => {
  return (
    <div className='w-full h-72s px-6 md:px-20 md:py-44 py-20 flex flex-col items-center' id="about">
      <div className='flex flex-row items-center justify-center mb-6'>
        <h2 className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>About Me</h2>
        <div className='h-1 w-32 border border-orange-600 ml-6 bg-orange-600'></div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='h-[90px] w-[2px] md:w-1 border border-orange-600 ml-6 bg-orange-600 absolute -left-3  md:left-44'></div>
        <p className='text-center max-w-2xl mb-4'>
          Hi! I’m Shafaqat, a Frontend Developer and a Computer Science graduate from Jain College of Engineering. I’m passionate about creating user-friendly web experiences using HTML, CSS, JavaScript, and React.js with a focus on responsive design and performance.
        </p>
        <p className='text-center max-w-2xl'>
          My journey in tech began during my studies, and I love collaborating with others to bring ideas to life. When I’m not coding, you’ll find me designing.
        </p>
      </div>
    </div>
  );
};

export default About;

