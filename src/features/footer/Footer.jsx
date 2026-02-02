import React from 'react'

function Footer() {
  return (
      <footer className='w-full border-t bg-neutral-950 border-neutral-800 pt-8 pb-4 flex flex-col items-center justify-center gap-2'>
          <p className='text-neutral-500 text-center'>
              &copy; {new Date().getFullYear()} <span className='text-red-400 font-medium'>Sayed Mojib Sadat</span>. All rights reserved.
          </p>
          <p className='text-neutral-600 text-sm'>
              Designed & Built with SayedMojibSadat using React & Tailwind
          </p>
      </footer>
  )
}

export default Footer