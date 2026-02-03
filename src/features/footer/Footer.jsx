import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
    return (
        <footer className='w-full bg-gradient-to-t from-neutral-950 to-neutral-900 border-t border-neutral-800 pt-10 pb-6 flex flex-col items-center justify-center gap-3'>
            <p className='text-neutral-400 text-center text-sm md:text-base'>
                &copy; {new Date().getFullYear()} <span className='text-red-500 font-semibold'>Sayed Mojib Sadat</span>. All rights reserved.
            </p>
            <p className='text-neutral-500 text-xs md:text-sm tracking-wide'>
                Designed & Built by <span className='text-red-400'>SayedMojibSadat</span> using React & Tailwind
            </p>
            <div className='flex gap-4 mt-2'>
                <a href='https://github.com/SayedMojibSadat' className='text-red-400 hover:text-red-600 transition duration-500 md:text-base'>
                    <FaGithub size={20} />
                </a>
                <a href='https://t.me/@Sayedmojibsadat' className='text-red-400 hover:text-red-600 transition duration-500 md:text-base'>
                    <FaTelegram size={20} />
                </a>
                <a href='https://wa.me/93799117595' className='text-red-400 hover:text-red-600 transition duration-500 md:text-base'>
                    <IoLogoWhatsapp size={20} />
                </a>
            </div>
        </footer>
    )
}

export default Footer
