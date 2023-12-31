import React from 'react'

const Writepage = () => {
  return (
    <div className='container pt-[50px]'>
        <img className='w-[70vw] h-[250px] object-cover rounded-xl' src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <form className='relative'>
            <div className='flex items-center'>
                <label htmlFor="fileInput">
                    <i className="text-xl cursor-pointer w-[25px] h-[25px] rounded-[50%] border text-primary-50 border-primary-100 flex items-center justify-center fa-solid fa-plus"></i>    
                </label>
                <input className='hidden' type="file"id='fileInput'/>
                <input  className='w-[70vw] outline-none border-none p-5 text-3xl  ' type="text" placeholder='Title...' autoFocus={true} />
            </div>
            <div>
                <textarea 
                    name="" 
                    placeholder='Tell your Story...'
                    className='w-[70vw] outline-none  border-none text-xl p-5'
                ></textarea>
            </div>
            <button className='absolute right-[50px] top-[20px] text-white border-none p-[10px] rounded-lg bg-teal-500 cursor-pointer text-base'>Publish</button>
        </form>
    </div>
  )
}

export default Writepage