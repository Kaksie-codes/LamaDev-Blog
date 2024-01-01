import React from 'react'

const Post = () => {
  return (
    <div className='w-[385px] mt-0 mx-6 mb-10 '>
        <img className='w-full h-[280px] object-cover rounded-md' src="https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='flex-col flex items-center'>
            <div className='veralaRound-font text-primary-500 text-xs leading-5 mt-[15px] flex items-center gap-3'>
                <span className='cursor-pointer'>Music</span>
                <span className='cursor-pointer'>Life</span>
            </div>
            <span className='text-2xl josefin-font font-bold mt-[15px] cursor-pointer'>
                Lorem ipsum dolor sit amet.
            </span>
            <hr/>
            <span className='text-primary-600 mt-[15px]  cursor-pointer lora-font italic text-xs'>
                1 hour ago
            </span>
        </div>
        <p className='veralaRound-font line-clamp-4 text-[14px] leading-6 mt-[15px] text-primary-100'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque, temporibus possimus. Quas, aut iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque, temporibus possimus. Quas, aut iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque, temporibus possimus. Quas, aut iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque, temporibus possimus. Quas, aut iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque, temporibus possimus. Quas, aut iure.
        </p>
    </div>
  )
}

export default Post