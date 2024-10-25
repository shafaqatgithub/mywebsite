import React from 'react'
import ecommerce from "../components/assets/ecommerce.jpg"
import reduxecommerce from '../components/assets/reduxecommerce.jpg'
import spotify  from '../components/assets/spotify.jpg'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const projectData = [{
    id: 1,
    name: 'Redux E-Commerce Web',
    image: reduxecommerce,
    description :`
        <p>This project features a unique approach to online shopping with a focus on user experience and design.</p>
        <p>Built with <strong>Redux Toolkit</strong>, this application efficiently manages global state and enhances performance. The intuitive architecture allows for seamless updates and scalable features, making it easy to handle complex state interactions.</p>
      `,
    demolink: 'https://reactecommerce-self.vercel.app/'
  },
  {
    id: 2,
    name: 'Spotify Clone',
    image: spotify,
    description: 'A fully responsive web application that mimics the core features of Spotify. Key features include a navigation system, dynamic song display, and a visually appealing music player.',
    demolink: 'https://spotify-black.vercel.app/'
  },
  {
    id: 3,
    name: 'Ecommerce web using Redux-toolkit',
    image: ecommerce,
     description: `
    <h2>Your One-Stop Shop</h2>
    <p>Enjoy a seamless shopping experience with secure checkout, fast shipping, and excellent customer service. Whether you're looking for the latest gadgets, trendy clothing, or unique gifts, we have something for everyone.</p>
  ` , 
    demolink: 'https://shafaqatgithub.github.io/ecommerce-web/'
  },
  ]

  return (
    <div>
      <div className='flex flex-row items-center justify-center mb-6' id='projects'>
        <h2 className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>My Projects</h2>
        <div className='h-1 w-32 border border-orange-600 ml-6 bg-orange-600'></div>
      </div>
      {projectData.map((project, id) => (
        <ProjectCard key={id} image={project.image} name={project.name} description={project.description} demolink={project.demolink} />
      ))}
    </div>
  )
}

export default Projects