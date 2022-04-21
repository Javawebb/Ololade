import React from 'react'

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

export const Tasks = () => {
  return (
        <div className='w-4/5 m-auto'>
          <h1 className='text-5xl text-white mt-14'>Hello!👋🏻 </h1>
          <h1 className='text-5xl text-white mt-5 mb-5'>My name is Javokhir</h1>
          <h1 className='text-5xl text-white'>I'm FrontEnd <span className='text-indigo-700'>Developer!</span></h1>
          <p className='text-2xl text-gray-500 mt-10 mb-16'>Let me help you grow your business and make your product look pretty while at it </p>
          <button class="btn btn-info text-white">Say Hello!</button>
          <div className='flex justify-center items-center'></div>
        </div>
  )
}
