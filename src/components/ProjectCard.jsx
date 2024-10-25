import React from 'react'

const ProjectCard = ({image , name , description, demolink}) => {
  return (
    <div id='projects' className="flex  justify-center flex-col items-center md:flex-row px-0 py-2 gap-4 md:p-20 md:gap-8 m-10 rounded-3xl shadow-sm shadow-slate-700">
    <div className="w-[40%]">
      <img src={image} alt={name} className="rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300" />
    </div>
    <div className="w-[60%]">
    <h2 className='font-semibold text-xl py-1'>{name}</h2>
      <div className="mb-4 text-sm" dangerouslySetInnerHTML={{ __html: description }} />
      <a
        href={demolink}
        target="_blank"
        className="text-orange-600 hover:underline"
      >
        Check out the project 
      </a>
    </div>
  </div>
  )
}

export default ProjectCard