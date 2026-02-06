import React, { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', mScroll: 0, cScroll: 0, label: 'Home' },
    { id: 'about', mScroll: 784, cScroll: 527, label: 'About' },
    { id: 'experience', mScroll: 1882, cScroll: 1139, label: 'Experience' },
    { id: 'services', mScroll: 3427, cScroll: 1995, label: 'Services' },
    { id: 'skills', mScroll: 5920, cScroll: 2912, label: 'Skills' },
    { id: 'portfolio', mScroll: 8255, cScroll: 3712, label: 'Portfolio' },
    { id: 'contact', mScroll: 10130, cScroll: 4502, label: 'Contact' },
  ]

  return (
    <header className='h-[14vh] w-full fixed z-50 top-0 left-0 bg-neutral-950 flex items-center justify-between px-6 md:px-12 shadow-lg font-sans'>
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className='text-red-400 text-2xl sm:text-3xl md:text-4xl font-bold hover:cursor-pointer transition-all duration-500 hover-text-shadow truncate max-w-[70%]'
      >
        SayedMojibSadat
      </div>

      <nav className='hidden md:flex gap-8 items-center text-white text-[1.05rem]'>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`hover-text-shadow transition-all duration-300 ${item.id === 'home' ? 'text-red-400 font-bold' : 'text-red-100 '}hover:text-red-400`}
            onClick={() => {
              window.scrollTo({ top: (item.cScroll), behavior: 'smooth' })
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        type='button'
        className='md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label='Toggle navigation menu'
      >
        <span className={`h-0.75 w-8 bg-red-400 rounded-full transition-transform duration-300 origin-center ${isOpen ? 'translate-y-2.25 rotate-45' : ''
          }`} />
        <span className={`h-0.75 w-8 bg-red-400 rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
          }`} />
        <span className={`h-0.75 w-8 bg-red-400 rounded-full transition-transform duration-300 origin-center ${isOpen ? '-translate-y-2.25 -rotate-45' : ''
          }`} />
      </button>

      {isOpen && (
        <div className='md:hidden absolute top-[14vh] inset-x-0 bg-neutral-950 border-t border-neutral-800 flex flex-col items-center w-full py-6 shadow-2xl h-screen sm:h-auto'>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`w-full text-center py-4 text-lg hover:bg-neutral-900 transition-colors duration-200 ${item.id === 'home' ? 'text-red-400 font-bold' : 'text-red-100 hover:text-red-400'
                }`}
              onClick={() => {
                window.scrollTo({ top: item.mScroll, behavior: 'smooth' })
                setIsOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header