import React from 'react'
import { motion } from 'framer-motion'
import ImageBar from '../../home/components/ImageBar';
import HomeData from '../components/HomeData';

function Home() {
  return (
    <div
      className='h-[120vh] lg:h-screen w-full bg-neutral-800 flex  '
    >
      <motion.section
        className='flex h-full w-full flex-col-reverse items-center justify-center pt-[5vh] lg:pt-[14vh] gap-10 lg:gap-0 lg:flex-row overflow-x-hidden'
        id='home'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HomeData />
        <div className='w-full lg:w-9/20 flex items-center justify-center mt-6 lg:mt-0 px-4'>
          <ImageBar />
        </div>
      </motion.section>
    </div>
  )
}

export default Home