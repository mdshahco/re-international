import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 uppercase'>Sign Up</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" name="" id="username" placeholder='username' className='border p-3 rounded-lg'/>
        <input type="email" name="" id="email" placeholder='Email address' className='border p-3 rounded-lg'/>
        <input type="password" name="" id="password" placeholder='Password' className='border p-3 rounded-lg'/>
        <button className='bg-green-500 text-white uppercase rounded-lg p-3 hover:opacity-90 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
      <p>Have your account?</p>
      <Link to={"/sign-in"}>
        <span className=' text-blue-600'>Sign In</span>
      </Link>
      </div>
    </div>
  )
}
