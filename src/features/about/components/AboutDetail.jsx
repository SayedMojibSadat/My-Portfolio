import React from 'react'

function AboutDetail() {
    return (
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
    )
}

export default AboutDetail