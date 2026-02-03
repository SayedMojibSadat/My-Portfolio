import React from 'react'
import ImageBar from '../../home/components/ImageBar'

function About() {
  return (
    <section
      id='about'
      className='min-h-screen bg-neutral-900 text-red-100 pt-20 pb-16 flex flex-col-reverse lg:flex-row'
    >
      <div className='w-full lg:w-2/5 flex items-center justify-center mt-10 lg:mt-0'>
        <ImageBar />
      </div>
      <div className='w-full lg:w-3/5 px-6 md:px-12 text-red-100 flex flex-col items-start justify-center gap-10'>
        <div className='gap-3 flex flex-col md:mr-0'>
          <span className='text-red-400 font-medium text-lg md:text-xl'>WHO I AM ?</span>
          <h1 className='text-3xl md:text-5xl font-extralight leading-normal text-red-200'>
            I'm <span className='font-light text-red-400 text-shadow italic'>Sayed Mojib Sadat, </span>
            UI/UX Designer,
            Full Stack Developer.
          </h1>
          <p className='text-neutral-400 w-full text-sm md:text-base'>
            I specialize in designing and developing full‑stack applications that merge functionality with aesthetics. My work combines modern frameworks and responsive design to deliver seamless user experiences.
          </p>
          <hr className='text-neutral-600 w-full' />
        </div>
        <div className='flex flex-col gap-10 text-base md:text-xl w-full'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
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
              <h1 className='font-lightlighter text-blue-500 break-all'>
                <span className='text-neutral-50 font-bold'>Email: </span>
                <a href='mailto:sayedmojibsadat06@gmail.com'>sayedmojibsadat06@gmail.com</a>
              </h1>
            </div>
          </div>
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <button className='h-12 md:h-14 px-8 bg-red-500 rounded-xl hover:bg-red-700 box-shadow shadow-red-400 transition duration-700'>
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
