import React from 'react'

function AboutLinks() {
    return (
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
                <button className='h-12 md:h-14 px-8 bg-red-500 rounded-xl hover:bg-red-700 transition duration-700'>
                    Hire Me
                </button>
            </div>
        </div>
    )
}

export default AboutLinks