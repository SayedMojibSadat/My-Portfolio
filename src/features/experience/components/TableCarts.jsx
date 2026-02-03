import React from 'react'

function TableCarts() {
    const cartsData = [
        [
            {
                title: 'Frontend Development',
                description: 'Building modern and responsive user interfaces.',
                tech: 'React · HTML · CSS · Tailwind'
            },
            {
                title: 'Frontend Development',
                description: 'Building modern and responsive user interfaces.',
                tech: 'React · HTML · CSS · Tailwind'
            }
        ],
        [
            {
                title: 'Frontend Development',
                description: 'Building modern and responsive user interfaces.',
                tech: 'React · HTML · CSS · Tailwind'
            },
            {
                title: 'Frontend Development',
                description: 'Building modern and responsive user interfaces.',
                tech: 'React · HTML · CSS · Tailwind'
            }
        ],
        [
            {
                title: 'Frontend Development',
                description: 'Building modern and responsive user interfaces.',
                tech: 'React · HTML · CSS · Tailwind'
            },
            {
                title: 'Frontend Development',
                description: 'Building modern and responsive user interfaces.',
                tech: 'React · HTML · CSS · Tailwind'
            }
        ],
    ]

    return (
        <div className='w-full space-y-8'>
            {cartsData.map((element, rowIndex) => (
                <div key={rowIndex} className='flex flex-col md:flex-row gap-6'>
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
                </div>
            ))}
        </div>
    )
}

export default TableCarts
