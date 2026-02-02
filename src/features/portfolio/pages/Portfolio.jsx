import React, { useState } from 'react';
import { RiShareBoxFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const projects = [
    {
      title: 'Time Manager',
      imageUrl: 'projects_images/time_manager/1.png',
      desc: 'Aplication for management your time in special days such examp days, its fearures are clock, counter, alarm, stopwatch and pomodoro.',
      usedTechnologies: ['HTML', 'CSS', 'JavaScript'],
      gallery: [
        'projects_images/time_manager/1.png',
        'projects_images/time_manager/2.png',
        'projects_images/time_manager/3.png',
        'projects_images/time_manager/4.png',
        'projects_images/time_manager/5.png',
        'projects_images/time_manager/6.png',
      ],
      link: 'https://google.com'
    },
    {
      title: 'Task Manager',
      imageUrl: 'projects_images/task_manager/1.png',
      desc: 'Aplication for management your tasks with features like add, delete, edit, mark when completed and Customize Setting.',
      usedTechnologies: ['HTML', 'CSS', 'JavaScript'],
      gallery: [
        'projects_images/task_manager/1.png',
        'projects_images/task_manager/2.png',
        'projects_images/task_manager/3.png',
      ],
      link: '#'
    },
    {
      title: 'Operiting System',
      imageUrl: 'projects_images/os/2.png',
      desc: 'OS or Operiting System is a Simulated System such Mac OS that shows my ability in React and tailwind',
      usedTechnologies: ['React', 'Tailwind CSS'],
      gallery: [
        'projects_images/os/1.png',
        'projects_images/os/2.png',
        'projects_images/os/3.png',
        'projects_images/os/4.png',
        'projects_images/os/5.png',
        'projects_images/os/6.png',
      ],
      link: '#'
    },
    {
      title: 'React Templates',
      imageUrl: 'projects_images/template/1.png',
      desc: 'Open Source Templates for Developers that can use them for free in their projects.',
      usedTechnologies: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
      gallery: [
        'projects_images/template/1.png',
        'projects_images/template/2.png',
        'projects_images/template/3.png',
        'projects_images/template/4.png',
      ],
      link: '#'
    },
    {
      title: 'POS System',
      imageUrl: 'projects_images/pos/2.png',
      desc: 'Point of Sale System for managing sales and inventory.',
      usedTechnologies: ['React', 'Tailwind CSS', 'CSS', 'Supabase'],
      gallery: [
        'projects_images/pos/1.png',
        'projects_images/pos/2.png',
        'projects_images/pos/3.png',
        'projects_images/pos/4.png',
        'projects_images/pos/5.png',
        'projects_images/pos/6.png',
      ],
      link: '#'
    },
    {
      title: 'Calculator',
      imageUrl: 'projects_images/calculator/1.png',
      desc: 'A modern calculator application with a sleek design.',
      usedTechnologies: ['HTML', 'CSS', 'JavaScript'],
      gallery: [
        'projects_images/calculator/1.png',
      ],
      link: '#'
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    if (!fullScreenImage) document.body.style.overflow = 'auto';
  };

  const openImage = (img) => {
    setFullScreenImage(img);
  };

  const closeImage = () => {
    setFullScreenImage(null);
  };

  return (
    <div className='min-h-screen bg-neutral-900 text-red-100 pt-10 p-10 flex flex-col gap-15'>
      <div className='w-full flex flex-col items-center justify-center gap-3 mb-10'>
        <h2 className='text-xl text-red-400 text-shadow uppercase'>My Portfolio</h2>
        <h2 className='text-4xl text-neutral-50'>Recent Works</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {projects.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)}
            className='rounded-xl shadow shadow-neutral-600 overflow-hidden relative group cursor-pointer h-64'
          >
            <img
              src={item.imageUrl}
              className='size-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]'
              alt={item.title}
            />
            <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4'>
              <h3 className='text-3xl font-bold text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500'>
                {item.title}
              </h3>
              <span className='text-sm text-red-300 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75'>
                Click for details
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
          onClick={closeModal}
        >
          <div
            className='bg-neutral-800 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-y-auto custom-scrollbar shadow-2xl relative animate-fadeIn'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 p-2 bg-neutral-700/50 hover:bg-red-500 text-white rounded-full transition-colors z-10'
            >
              <IoMdClose size={24} />
            </button>

            <div className='w-full h-64 md:h-80 relative cursor-zoom-in' onClick={() => openImage(selectedProject.imageUrl)}>
              <img
                src={selectedProject.imageUrl}
                className='size-full object-cover'
                alt={selectedProject.title}
              />
              <div className='absolute inset-0 bg-linear-to-t from-neutral-800 to-transparent'></div>
              <h2 className='absolute bottom-5 left-5 text-4xl font-bold text-white'>{selectedProject.title}</h2>
            </div>

            <div className='p-6 md:p-8 flex flex-col gap-6'>
              <div>
                <h3 className='text-xl text-red-400 mb-2'>Description</h3>
                <p className='text-neutral-300 leading-relaxed'>
                  {selectedProject.desc}
                </p>
              </div>

              <div>
                <h3 className='text-xl text-red-400 mb-3'>Gallery</h3>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                  {selectedProject.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      onClick={() => openImage(img)}
                      className='rounded-lg hover:opacity-80 transition-opacity cursor-zoom-in'
                      alt="gallery"
                    />
                  ))}
                </div>
              </div>

              <div className='flex justify-end pt-4 border-t border-neutral-700'>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all'
                >
                  View Live Project <RiShareBoxFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {fullScreenImage && (
        <div
          className='fixed inset-0 z-60 flex items-center justify-center bg-black/95 p-2 md:p-10 animate-fadeIn'
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className='absolute top-6 right-6 p-2 bg-white/10 hover:bg-red-500 text-white rounded-full transition-all'
          >
            <IoMdClose size={30} />
          </button>
          <img
            src={fullScreenImage}
            className='max-w-full max-h-full object-contain shadow-2xl rounded-lg'
            alt="Full Screen"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default Portfolio;