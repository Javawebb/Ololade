import React from 'react'
import { useRef } from 'react'
import { useCustomContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Alert } from '../components/Alert'
export const Auth = () => {
    const navigate = useNavigate()
    const { setUser } = useCustomContext()
    const name = useRef() 
    const age = useRef()

    const [isError,setIsError] = useState(false)
    const submitHandler = (event) => {
        event.preventDefault()
        if(!name.current.value.trim() || !age.current.value.trim()){
            setIsError(true)
            return
        }
        const user = {
            name: name.current.value,
            age:age.current.value
        }

        setUser(user)
        navigate('/tasks')
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
        {isError ? <Alert/> : ''}
        <form onSubmit={submitHandler} className='p-14 bg-base-200 rounded-md shadow-md min-w-[320px] max-w-md w-1/2'>
            <h1 className='text-3xl'>Enter information</h1>
            <div className='form-control my-10'>
                <label  htmlFor="" className="">Write your Name</label>
                <input ref={name} type="text" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className='form-control'>
                <label  htmlFor="" className="">Write your Age</label>
                <input maxLength={50} minLength={12} ref={age} type="number" className="input input-bordered w-full max-w-xs"/>
            </div>
            <button className='btn btn-primary w-full mt-10'>Start</button>
        </form>
        
    </div>
  )
}