import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { BsCalendar3 } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import { BiBasketball } from 'react-icons/bi';
import { FiTwitter } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const Task = () => {
    return (
        <div className='shadow-sm w-4/5 m-auto max-w-9xl py-3 mx-auto mt-36 d-flex justify-center items-center gap-8 bg-gray-900 border-gray-700 border-solid border-2 rounded-xl p-16'>
            <ul className='flex gap-8'>
            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info font-sm'>
                <NavLink
                 to={"/"}>
                <AiFillHome className='text-white text-5xl'/>
                </NavLink>
            </li>
            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info'>
                <NavLink to={"/projects"}>
                <FaRegLightbulb className='text-5xl'/>
                </NavLink>
            </li>

            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info'>
                <NavLink to={"/aboutme"}>
                <BsPerson className='text-5xl'/>
                </NavLink>
            </li>
            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info'>
                <NavLink to={"/"}>
                <BsEnvelope className='text-5xl'/>
                </NavLink>
            </li>
            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info'>
                <NavLink to={"/"}>
                <BsCalendar3 className='text-5xl'/>
                </NavLink>
            </li>
            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info'>
                <NavLink to={"/"}>
                <FiTwitter className='text-5xl'/>
                </NavLink>
            </li>
            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info'>
                <NavLink to={"/"}>
                <BsBehance className='text-5xl'/>
                </NavLink>
            </li>
            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info'>
                <NavLink to={"/"}>
                <BiBasketball className='text-5xl'/>
                </NavLink>
            </li>
            <li className='p-10 bg-gray-800 rounded-xl text-white btn-info'>
                <NavLink to={"/"}>
                <BsMoonFill className='text-5xl'/>
                </NavLink>
            </li>
            </ul>
        </div>
    )
}
            
{/* <div className="bg-base-300 p-10 rounded-md shadow">
1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quaerat. Dolores mollitia pariatur error modi corrupti cum repudiandae quidem nihil, omnis laboriosam eveniet expedita molestiae.
</div>
<div className="grid grid-cols-2 gap-10 my-20">
<button className='btn btn-lg'>A. Lorem ipsum dolor sit amet.</button>
<button className='btn btn-lg'>B. Lorem ipsum dolor sit amet.</button>
<button className='btn btn-lg'>C. Lorem ipsum dolor sit amet.</button>
<button className='btn btn-lg'>D. Lorem ipsum dolor sit amet.</button>
</div> */}
            // * <button className="p-10 bg-gray-800 rounded-xl text-white btn-info"><GrHomeRounded/></button>
            // <button className="p-10 bg-gray-800 rounded-xl text-white btn-info">Info</button>
            // <button className="p-10 bg-gray-800 rounded-xl text-white btn-info">Info</button>
            // <button className="p-10 bg-gray-800 rounded-xl text-white btn-info">Info</button>
            // <button className="p-10 bg-gray-800 rounded-xl text-white btn-info">Info</button>
            // <button className="p-10 bg-gray-800 rounded-xl text-white btn-info">Info</button>
            // <button className="p-10 bg-gray-800 rounded-xl text-white btn-info">Info</button>
            // <button className="p-10 bg-gray-800 rounded-xl text-white btn-info">Info</button>
            // <button className="p-10 bg-gray-800 rounded-xl text-white btn-info">Info</button>