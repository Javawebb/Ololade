import React from 'react'
import { Navbar } from '../components/Navbar'
import { Task } from '../components/Task'
import { motion } from 'framer-motion'
import { TransitionPage } from '../components/TransitionPage'

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
    <TransitionPage >
        <Navbar/>
        <div>
          <h1 className='text-center text-5xl mt-14'>Quick response to questions</h1>
          <div className='flex justify-center items-center'></div>
            <Task/>
        </div>
    </TransitionPage>
  )
}
