import React from 'react'
import TableCarts from '../components/TableCarts'

function Experience() {

  return (
    <section
      id='experience'
      className='min-h-screen bg-neutral-800 text-red-100 pt-10 p-5 md:p-10 flex flex-col gap-15'
    >
      <div className='w-full flex flex-col items-center justify-center gap-3'>
        <h2 className='text-xl text-red-400 text-shadow'>MY JOURNEY</h2>
        <h2 className='text-4xl text-neutral-50'>Qualification</h2>
      </div>

      <div className='h-full w-full'>
        <TableCarts />
      </div>
    </section>
  )
}

export default Experience