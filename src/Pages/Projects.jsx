import React from 'react'
import img from './image191.png'
import img2 from './image192.png'
const variants ={
    initial:{
      x:'-100%',
  
    },
    open:{
      x:0,
    },
    exit:{
      x:'100%',
    }
  }

export const Projects = () => {
  return (
    <div className='w-4/5 m-auto'>
      <h1 className='text-5xl text-white mt-14'>Projects 💡</h1>
      <p className='text-2xl text-gray-500 mt-10 mb-16'>Some things i’ve been working on in the past few years:</p>
      <div className='flex mb-32'>
        <div className="w-2/5 mr-32">
          <h2 className='font-bold text-white text-4xl'>Remotely</h2>
          <p className="mt-10 mb-16">Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.</p>
          <button class="btn btn-info shadow-2xl shadow-gray-900 text-white">View project</button>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="flex">
        <img className='mr-32' src={img2} alt="" />
        <div className="w-2/5 mr-32">
          <h2 className='font-bold text-white text-4xl'>Brutal Design Library</h2>
          <p className="mt-10 mb-16">Brutal is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.</p>
          <button class="btn btn-info shadow-2xl shadow-gray-900 text-white">View project</button>
        </div>
      </div>
    </div>
  )
}
