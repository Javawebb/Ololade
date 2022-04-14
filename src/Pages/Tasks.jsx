import React from 'react'
import { Navbar } from '../components/Navbar'
import { Task } from '../components/Task'

export const Tasks = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <h1 className='text-center text-5xl mt-14'>Quick response to questions</h1>
          <div className='flex justify-center items-center'></div>
            <Task/>
        </div>
    </div>
  )
}
