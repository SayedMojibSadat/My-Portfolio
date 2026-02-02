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
        <div className='w-full'>
            {cartsData.map((element) => (
                <div className='flex'>
                    {element.map((data) => (
                        <div className='w-1/2 h-70 border-3 border-l-0 border-t-0 border-neutral-700 p-6 flex flex-col justify-center'>
                            <div>
                                <h3 className='text-4xl text-neutral-50'>{data.title}</h3>
                                <p className='text-xl mt-3 leading-relaxed'>
                                    {data.description}
                                </p>
                                <p className='text-xl mt-4 text-red-400'>
                                    {data.tech}
                                </p>
                            </div>

                            <div className='h-13 w-13 cursor-pointer bg-neutral-800 relative top-18 -right-153 overflow-hidden text-2xl flex items-center justify-center p-5 text-neutral-400 rounded-full border-3 border-neutral-700'>+</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TableCarts