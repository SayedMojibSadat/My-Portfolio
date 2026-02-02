import React from 'react'

function ServiceCart({ icon, count, title, describe }) {
    return (
        <div className='h-full bg-neutral-800 rounded-xl hover:bg-neutral-900 border hover:border-neutral-600 border-neutral-800 cursor-pointer transition-all duration-300 p-7 pt-8 pb-8 flex flex-col gap-5'>
            <div className='font-bold text-7xl flex items-center justify-between'>
                {icon}
                <span className='font-extralight text-neutral-600'>{count}</span>
            </div>
            <h1 className='text-[1.8rem] font-bold'>
                {title}
            </h1>
            <p className='text-neutral-500 leading-7 text-[1.15rem]'>
                {describe}
            </p>
        </div>
    )
}

export default ServiceCart