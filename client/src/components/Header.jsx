import React from 'react'

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center mx-auto max-w-6xl p-3'>
        <Link to='/'>
        <h1 className='font-bold text-slate-800 text-sm sm:text-xl flex flex-wrap'>
            <span className='text-red-600'>R</span>
            <span>E International</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-2 rounded-lg items-center flex sm:hidden'>
            <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-48'/>
            <FaSearch className='text-slate-500'/>
        </form>
        <ul className='flex gap-6 font-semibold'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-600 hover:text-slate-800 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-600 hover:text-slate-800 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className=' text-slate-600 hover:text-slate-800 hover:underline'>Sign In</li></Link>
        </ul>
        <form className='bg-slate-100 p-2 rounded-lg items-center hidden sm:flex'>
            <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-36 sm:w-48'/>
            <FaSearch className='text-slate-500'/>
        </form>

        </div>
    </header>
  )
}
