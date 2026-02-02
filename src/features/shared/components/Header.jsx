import React from 'react'
import { useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate()
  return (
    <header className='h-[14vh] w-full fixed z-50 top-0 right-0 bg-neutral-950 flex justify-between items-center pl-12 pr-12 '>
      <div
        onClick={() => {
          window.scrollTo({ top: 0 })
          window.location.reload()
        }}
        className='text-red-400 text-4xl font-bold hover:cursor-pointer transition-all duration-500 hover-text-shadow w-1/4'
      >SayedMojibSadat</div>
      
      <div className='w-3/7 h-full flex justify-between items-center text-white text-[1.1rem]'>
        <button className='hover-text-shadow text-red-400 transition-all duration-300 font-bold' onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}>Home</button>

        <button className='hover-text-shadow hover:text-red-400 text-red-100 transition-all duration-300' onClick={() => {
          window.scrollTo({ top: 528, behavior: "smooth" })
        }}>About</button>

        <button className='hover-text-shadow hover:text-red-400 text-red-100 transition-all duration-300' onClick={() => {
          window.scrollTo({ top: 1053, behavior: "smooth" })
        }}>Experience</button>

        <button className='hover-text-shadow hover:text-red-400 text-red-100 transition-all duration-300' onClick={() => {
          window.scrollTo({ top: 2278, behavior: "smooth" })
        }}>Services</button>

        <button className='hover-text-shadow hover:text-red-400 text-red-100 transition-all duration-300' onClick={() => {
          window.scrollTo({ top: 3289, behavior: "smooth" })
        }}>Skills</button>

        <button className='hover-text-shadow hover:text-red-400 text-red-100 transition-all duration-300' onClick={() => {
          window.scrollTo({ top: 4178, behavior: "smooth" })
        }}>Portfolio</button>

        <button className='hover-text-shadow hover:text-red-400 text-red-100 transition-all duration-300' onClick={() => {
          window.scrollTo({ top: 4969, behavior: "smooth" })
        }}>Contact</button>
      </div>
    </header>
  )
}

export default Header