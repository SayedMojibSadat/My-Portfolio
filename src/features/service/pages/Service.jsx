import React from 'react'
import { FiLayers } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";
import { MdBugReport } from "react-icons/md";
import { MdTransform } from "react-icons/md";
import ServiceCart from '../components/ServiceCart';

function Service() {

  const serviceData = [
    [
      {
        icon: <FiLayers className='text-red-500' size={42} />,
        count: '01',
        title: 'UI/UX Design',
        describe: 'Creating intuitive, user-friendly interfaces with a strong focus on usability, accessibility, and clean design.',
      },
      {
        icon: <FaLaptopCode className='text-red-500' size={42} />,
        count: '02',
        title: 'Web Design',
        describe: 'Designing modern, responsive websites that look great on all devices and screen sizes.',
      },
      {
        icon: <FaCode className='text-red-500' size={42} />,
        count: '03',
        title: 'Web Development',
        describe: 'Developing fast, scalable websites and web applications using clean and maintainable code.',
      },
    ],
    [
      {
        icon: <TbDatabase className='text-red-500' size={42} />,
        count: '04',
        title: 'Backend & API Basics',
        describe: 'Building simple APIs, connecting front-end to databases, and handling server-side data safely.',
      },
      {
        icon: <MdBugReport className='text-red-500' size={42} />,
        count: '05',
        title: 'Bug Fixing & Debugging',
        describe: 'Identifying and fixing bugs to ensure smooth and stable performance of web applications.',
      },
      {
        icon: <MdTransform className='text-red-500' size={42} />,
        count: '06',
        title: 'PSD to Code',
        describe: 'Converting PSD or Figma designs into pixel-perfect, responsive, and well-structured code.',
      },
    ]
  ]


  return (
    <section
      id='services'
      className='min-h-screen bg-neutral-900 text-red-100 pt-10 p-5 md:p-10 flex flex-col gap-15'
    >
      <div className='w-full flex flex-col items-center justify-center gap-3'>
        <h2 className='text-xl text-red-400 text-shadow'>SERVICES</h2>
        <h2 className='text-4xl text-center text-neutral-50'>What I done For you</h2>
      </div>

      <div className='h-full w-full gap-7 flex flex-col mb-15'>
        {serviceData.map((element) => (
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
            {element.map((data) => (
              <ServiceCart icon={data.icon} count={data.count} title={data.title} describe={data.describe} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service