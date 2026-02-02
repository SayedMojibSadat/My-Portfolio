import React from 'react'
import ImageBar from '../../home/components/ImageBar'
import { ReactTyped } from "react-typed";

function About() {
  return (
    <div id='--about--' className='h-[86vh] bg-neutral-900 text-red-100 flex'>
      <div className='w-8/20 h-full flex items-center justify-center'>
        <ImageBar />
      </div>
      <div className='w-12/20 h-full p-17 pl-10  text-red-100 flex flex-col items-start justify-center pr-0 gap-10'>
        <div className='gap-3 flex flex-col mr-15'>
          <span className='text-red-400 font-medium text-xl '>WHO I AM ?</span>
          <h1 className='text-5xl font-extralight leading-normal text-red-200'>I'm <span className='font-light text-red-400 text-shadow italic'>Sayed Mojib Sadat, </span>
            UI/UX Designer,
            Full Stack Developer.
          </h1>
          <p className='text-neutral-400 w-full'>
            I specialize in designing and developing full‑stack applications that merge functionality with aesthetics. My work combines modern frameworks and responsive design to deliver seamless user experiences.
          </p>
          <hr className='text-neutral-600' />
        </div>
        <div className='flex flex-col gap-14 text-xl'>
          <div className='w-full grid grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-lightlighter text-neutral-400'>
                <span className='text-neutral-50 font-bold'>Name: </span>
                Sayed Mojib Sadat
              </h1>
              <h1 className='font-lightlighter text-neutral-400'>
                <span className='text-neutral-50 font-bold'>From: </span>
                Afghanistan, Herat
              </h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='font-lightlighter text-neutral-400'>
                <span className='text-neutral-50 font-bold'>Age: </span>
                15 Years
              </h1>
              <h1 className='font-lightlighter text-blue-500'>
                <span className='text-neutral-50 font-bold'>Email: </span>
                <a href='mailto:sayedmojibsadat06@gmail.com'>sayedmojibsadat06@gmail.com</a>
              </h1>
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <button className='h-14 w-50 bg-red-500 rounded-xl hover:bg-red-700 box-shadow shadow-red-400 transition duration-700'>Hire Me</button>
            <div className=''>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About