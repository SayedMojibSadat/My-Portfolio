import React from 'react'
import { FaGithub, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

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
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-20'>
                <a
                    href='images/darkMan.png'
                    download={'Sayed_Mojib_CV.pdf'}
                    className='h-12 md:h-14 px-8 flex items-center justify-center cursor-pointer bg-red-500 rounded-xl hover:bg-red-700 transition duration-700'>
                    Download CV
                </a>
                <div className='flex gap-5'>
                    <a href='https://github.com/SayedMojibSadat' target='__blank' className='text-red-400 hover:text-red-600 transition duration-500 md:text-base'>
                        <FaGithub size={25} />
                    </a>
                    <a href='https://t.me/@Sayedmojibsadat' target='__blank' className='text-red-400 hover:text-red-600 transition duration-500 md:text-base'>
                        <FaTelegram size={25} />
                    </a>
                    <a href='https://wa.me/93799117595' target='__blank' className='text-red-400 hover:text-red-600 transition duration-500 md:text-base'>
                        <RiWhatsappFill size={27} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutLinks