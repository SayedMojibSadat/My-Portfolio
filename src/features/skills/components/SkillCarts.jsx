import React from 'react'

function SkillCarts({ key, name, level, description }) {
    return (
        <div
            key={key}
            className='bg-neutral-900 rounded-xl p-6 flex flex-col justify-between pt-10 pb-10 hover:bg-neutral-800 border hover:border-neutral-950 border-neutral-800 cursor-pointer transition-all duration-300 '
        >
            <div className='flex justify-between text-2xl'>
                <span>{name}</span>
                <span>{level}%</span>
            </div>

            <p className='text-neutral-400 text-xl'>
                {description}
            </p>

            <div className='relative h-2 bg-neutral-700 rounded overflow-hidden'>
                <div
                    className='h-full rounded-full bg-red-400'
                    style={{ width: `${level}%` }}
                ></div>
            </div>

        </div>
    )
}

export default SkillCarts