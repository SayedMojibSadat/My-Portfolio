import React from 'react'
import { motion } from 'framer-motion'
import cartsData from '../store/cartData'

function TableCarts() {
    return (
        <motion.div className='w-full space-y-8' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
            {cartsData.map((element, rowIndex) => (
                <motion.div key={rowIndex} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className='flex flex-col md:flex-row gap-6'>
                    {element.map((data, index) => (
                        <div
                            key={index}
                            className='w-full md:w-1/2 cursor-pointer bg-neutral-900 border border-neutral-700 rounded-xl p-8 flex flex-col justify-between hover:bg-neutral-800 hover:border-red-500 transition duration-500'
                        >
                            <div>
                                <h3 className='text-2xl md:text-3xl lg:text-4xl text-red-400 font-semibold'>{data.title}</h3>
                                <p className='text-base md:text-lg mt-3 leading-relaxed text-neutral-300'>
                                    {data.description}
                                </p>
                                <p className='text-base md:text-lg mt-4 text-red-500 font-medium'>
                                    {data.tech}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            ))}
        </motion.div>
    )
}

export default TableCarts