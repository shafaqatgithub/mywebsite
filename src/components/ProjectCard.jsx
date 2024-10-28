// import React from 'react'

// const ProjectCard = ({image , name , description, demolink}) => {
//   return (
//     <div id='projects' className="flex text-justify  justify-center flex-col items-center md:flex-row  gap-4 md:p-20 md:gap-8 m-10 rounded-3xl shadow-sm shadow-slate-700">
//     <div className="w-[70%]">
//       <img src={image} alt={name} className="rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300" />
//     </div>
//     <div className="w-[70%]">
//     <h2 className='font-semibold text-xl py-2'>{name}</h2>
//       <div className="mb-4  text-sm" dangerouslySetInnerHTML={{ __html: description }} />
//       <a
//         href={demolink}
//         target="_blank"
//         className="text-orange-600 hover:underline"
//       >
//         Check out the project 
//       </a>
//     </div>
//   </div>
//   )
// }

// export default ProjectCard

import React from 'react';

const ProjectCard = ({ image, name, description, demolink }) => {
  return (
    <div id='projects' className="flex flex-col md:flex-row justify-center text-center items-center gap-6 p-6 md:p-10 m-6 md:m-10 rounded-3xl shadow-sm shadow-slate-700">
      <div className="w-[80%] md:w-[80%]">
        <img 
          src={image} 
          alt={name} 
          className="rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300 w-full h-auto" 
        />
      </div>
      <div className="w-full md:w-[70%]">
        <h2 className='font-semibold text-xl py-2'>{name}</h2>
        <div className="mb-4 text-sm" dangerouslySetInnerHTML={{ __html: description }} />
        <a
          href={demolink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline"
        >
          Check out the project 
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
