import React from 'react'
import TableCarts from '../components/TableCarts'

function Experience() {

  

  return (
    <div className='h-[200vh] bg-neutral-800 text-red-100 pt-10 p-10 flex flex-col gap-15'>
      <div className='w-full flex flex-col items-center justify-center gap-3'>
        <h2 className='text-xl text-red-400 text-shadow'>MY JOURNEY</h2>
        <h2 className='text-4xl text-neutral-50'>Qualification</h2>
      </div>

      <div className='h-full w-full'>
        <div className='h-fit w-full text-2xl flex pb-2 border-b-3 border-neutral-700'>
          <div className='w-1/2 text-center'>Experiences</div>
          <div className='w-1/2 text-center'>Projects</div>
        </div>
        <TableCarts />
      </div>
    </div>
  )
}

export default Experience
