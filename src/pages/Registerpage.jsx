import React from 'react'
import { Link } from 'react-router-dom'

const Registerpage = () => {
  return (
    <div className="viewport-hieght">
        <div className="container h-full relative grid place-items-center">            
            <form className='flex items-start justify-center flex-col w-full max-w-[400px] mx-auto'>
                <span className='text-5xl mb-5'>Register</span> 
                <label className='my-[10px] mx-0' htmlFor="">Username</label>
                <input className='p-[10px] w-full bg-white' type="email" placeholder='Enter your Username...'/>
                <label className='my-[10px] mx-0' htmlFor="">Email</label>
                <input className='p-[10px] w-full bg-white' type="email" placeholder='Enter your email...'/>
                <label className='my-[10px] mx-0' htmlFor="">Password</label>
                <input className='p-[10px] w-full bg-white' type="password" placeholder='Enter your password...'/>
                <button className='w-full mt-5 bg-red-300 text-white cursor-pointer border-none rounded-xl p-[10px]'>Register</button>
            </form>
            <Link to='/login'>
              <button className='absolute top-[10px] right-5 bg-teal-500 text-white cursor-pointer border-none p-[8px] px-6 rounded-xl'>
                Login
              </button>
            </Link>
        </div>
    </div>
  )
}

export default Registerpage