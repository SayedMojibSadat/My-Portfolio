import React from 'react'
import ImageBar from '../../home/components/ImageBar';
import HomeData from '../components/HomeData';

function Home() {
  return (
    <section
      id='home'
      className='h-[120vh] lg:h-screen w-full bg-neutral-800 pt-[12vh] lg:pt-[14vh] flex flex-col-reverse items-center justify-center gap-10 lg:gap-0 lg:flex-row overflow-x-hidden'
    >
      <HomeData />
      <div className='w-full lg:w-9/20 flex items-center justify-center mt-6 lg:mt-0 px-4'>
        <ImageBar />
      </div>
    </section>
  )
}

export default Home