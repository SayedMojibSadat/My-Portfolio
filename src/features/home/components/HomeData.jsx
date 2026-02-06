import React from 'react'
import { ReactTyped } from "react-typed";

function HomeData() {
    return (
        <div className='w-full lg:w-11/20 px-6 md:px-12 text-red-100 flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-6 md:gap-8'>
            <div className='gap-3 flex flex-col w-full'>
                <span className='text-neutral-400 text-base md:text-lg lg:text-xl'>Hello,</span>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-light leading-snug md:leading-normal text-red-200'>
                    I'm <span className='font-bold text-red-400 text-shadow italic'>Sayed Mojib Sadat,</span>
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
            <p className='text-neutral-400 w-full md:w-4/5 lg:w-full text-sm sm:text-base md:text-lg leading-relaxed'>
                I specialize in designing and developing full‑stack applications that merge functionality with aesthetics. My work combines modern frameworks and responsive design to deliver seamless user experiences.
            </p>
            <div className='flex flex-row flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base lg:text-xl w-full'>
                <button className='h-11 md:h-14 px-6 md:px-10 bg-red-500 rounded-xl hover:bg-red-700 shadow-lg shadow-red-500/20 transition duration-700 text-white'>
                    Hire Me
                </button>
                <button className='h-11 md:h-14 px-6 md:px-10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-700 rounded-xl'>
                    Portfolio
                </button>
            </div>
        </div>
    )
}

export default HomeData