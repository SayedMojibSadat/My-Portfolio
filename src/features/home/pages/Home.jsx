import React from 'react'
import Header from '../../shared/components/Header'
import { ReactTyped } from "react-typed";
import ImageBar from '../components/ImageBar';

function Home() {
  return (
    <div className='h-screen bg-neutral-800 flex'>
      <div className='w-11/20 mt-[14vh] p-17 text-red-100 flex flex-col items-start justify-center pr-0 gap-10'>
        <div className='gap-3 flex flex-col'>
          <span className='text-neutral-400 text-xl'>Hello,</span>
          <h1 className='text-5xl font-light leading-normal text-red-200'>I'm <span className='font-bold text-red-400 text-shadow italic'>Sayed Mojib Sadat,</span>
            <br />
            <ReactTyped
              className='text-red-200 text-shadow-sm'
              strings={[
                "UI/UX Designer.",
                "Full Stack Developer.",
                "Frontend Developer.",
                "Backend Developer.",
              ]}
              typeSpeed={45}
              backSpeed={45}
              loop
            />
          </h1>
        </div>
        <p className='text-neutral-400 w-4/5'>
          I specialize in designing and developing full‑stack applications that merge functionality with aesthetics. My work combines modern frameworks and responsive design to deliver seamless user experiences.
        </p>
        <div className='flex gap-4 text-xl'>
          <button className='h-14 w-35 bg-red-500 rounded-xl hover:bg-red-700 box-shadow shadow-red-400 transition duration-700'>Hire Me</button>
          <button className='h-14 w-35 border border-red-500 text-red-500 box-shadow hover:bg-red-500 hover:text-white transition duration-700 rounded-xl'>Portfolio</button>
        </div>
      </div>
      <div className='w-9/20 h-full flex items-center justify-center'>
        <ImageBar className={'mt-[14vh]'} />
      </div>
    </div>
  )
}

export default Home