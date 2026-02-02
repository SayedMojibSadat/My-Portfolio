import React, { useState } from 'react'
import { set } from 'react-hook-form';
import SkillCarts from '../components/SkillCarts';
import skills from '../stores/skills';

function Skills() {

    return (
        <div className='h-[145vh] bg-neutral-800 text-red-100 pt-10 p-10 flex flex-col gap-15'>
            <div className='w-full flex flex-col items-center justify-center gap-3'>
                <h2 className='text-xl text-red-400 text-shadow'>MY TALENT</h2>
                <h2 className='text-4xl text-neutral-50'>Professional Skills</h2>
            </div>

            <div className='h-full w-full gap-7 mb-15 grid grid-cols-4 grid-rows-2'>
                {skills.map((element, index) => (
                    <SkillCarts key={index} name={element.name} level={element.level} description={element.description} />
                ))}
            </div>
        </div>
    )

}

export default Skills