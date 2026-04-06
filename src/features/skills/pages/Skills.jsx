import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { set } from 'react-hook-form';
import SkillCarts from '../components/SkillCarts';
import skills from '../stores/skills';

function Skills() {

    return (
        <section
            id='skills'
            className='min-h-screen bg-neutral-800 text-red-100 pt-10 p-5 md:p-10 flex flex-col gap-15'
        >
            <div className='w-full flex flex-col items-center justify-center gap-3'>
                <h2 className='text-xl text-red-400 text-shadow'>MY TALENT</h2>
                <h2 className='text-4xl text-neutral-50'>Professional Skills</h2>
            </div>

            <motion.div className='h-full w-full gap-7 mb-15 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                {skills.map((element, index) => (
                    <motion.div key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                        <SkillCarts name={element.name} level={element.level} description={element.description} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )

}

export default Skills