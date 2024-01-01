import React from 'react'
import Sidebar from '../components/Sidebar'

const Settingspage = () => {
  return (
    <div className="container pt-5">
        <div className='flex'>
            <div className='flex-[9]'>
                <div className='flex items-center justify-between'>
                    <span className='text-3xl text-red-400 mb-5'>Update your Account</span>
                    <span className='cursor-pointer text-red-700 text-xs'>Delete Account</span>
                </div>
                <form className='flex flex-col'>
                    <label className='text-xl mt-5'>Profile Picture</label>
                    <div className='flex items-center mx-0 my-[10px] gap-4'>
                        <img className='w-[70px] h-[70px] object-cover rounded-3xl' src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <label htmlFor="fileInput">
                            <i className="w-[25px] h-[25px] rounded-[50%] bg-red-400 text-white flex items-center justify-center cursor-pointer fa-regular fa-circle-user"></i>
                        </label>
                        <input className='hidden' type="file" id="fileInput" />
                    </div>
                    <label  className='text-xl mt-5' htmlFor="">Username</label>
                    <input className='h-[30px] pl-[5px] py-[5px] my-[10px] text-primary-50 border-b border-primary-300' type="text" placeholder='N__Kay' />
                    <label  className='text-xl mt-5' htmlFor="">Email</label>
                    <input className='h-[30px] pl-[5px] py-[5px] my-[10px] text-primary-50 border-b border-primary-300' type="email" placeholder='bobo@gmail.com' />
                    <label  className='text-xl mt-5' htmlFor="">Password</label>
                    <input className='h-[30px] pl-[5px] py-[5px] my-[10px] text-primary-50 border-b border-primary-300' type="password" placeholder='myPassword'/>
                    <button className='w-[150px] self-center text-white border-none p-[10px] rounded-lg bg-teal-500 cursor-pointer text-base mt-5'>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Settingspage