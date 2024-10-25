import React from 'react'
import html from "../components/assets/html.png"
import css from "../components/assets/css.png"
import js from "../components/assets/javascript.png"
import tailwind from "../components/assets/tailwind.png"
import reactjs from "../components/assets/react.png"

const Skills = () => {
  return (
    <div className='md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 md:flex md:flex-row md:justify-between md:items-center p-10 content-center'>

        <h2 className='text-2xl md:text-4xl font-bold m-10' >My <br/> Tech <br/> Stack</h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'> 
            <img src={html} alt='' width={100} height={100}/>
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'> 
            <img src={css} alt='' width={100} height={100}/>
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'> 
            <img src={js} alt='' width={100} height={100}/>
            <p className='mt-2'>JS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'> 
            <img src={tailwind} alt='' width={100} height={100}/>
            <p className='mt-2'>Tailwind</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'> 
            <img src={reactjs} alt='' width={100} height={100}/>
            <p className='mt-2'>React</p>
        </div>
    </div>
  )
}

export default Skills