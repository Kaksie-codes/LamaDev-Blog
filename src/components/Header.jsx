import React from 'react'

const Header = () => {
  return (
    <div className='mt-[60px]'>
        <div className="container">
            <div className='lora-font flex flex-col items-center text-primary-100 relative'>
                <span className='absolute top-[18%] text-xl'>React & Node</span>
                <span className='absolute top-[20%] text-[100px]'>Blog</span>
            </div>
            <img className='w-full h-[450px] object-cover mt-[80px]' src="https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>        
    </div>
  )
}

export default Header