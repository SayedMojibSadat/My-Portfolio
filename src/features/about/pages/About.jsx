import React from 'react'
import { motion } from 'framer-motion'
import ImageBar from '../../home/components/ImageBar'
import AboutDetail from '../components/AboutDetail'
import AboutLinks from '../components/AboutLinks'

function About() {
  return (
    <motion.section
      id='about'
      className='min-h-screen bg-neutral-900 text-red-100 pt-20 pb-16 flex flex-col-reverse lg:flex-row'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='w-full lg:w-2/5 flex items-center justify-center mt-10 lg:mt-0'>
        <ImageBar />
      </div>
      <div className='w-full lg:w-3/5 px-6 md:px-12 text-red-100 flex flex-col items-start justify-center gap-10'>
        <AboutDetail />
        <AboutLinks />
      </div>
    </motion.section>
  )
}

export default About