import React from 'react'

const TopBar = () => {
  return (
    <div className='topBar bg-white h-[50px] sticky top-0 z-10'>
        <div className="container flex items-center h-full">
            <div  className='flex w-[25%] gap-3 items-center'>
                <i class="text-xl text-primary-100 cursor-pointer fa-brands fa-facebook"></i>
                <i class="text-xl text-primary-100 cursor-pointer fa-brands  fa-x-twitter"></i>
                <i class="text-xl text-primary-100 cursor-pointer fa-brands  fa-pinterest"></i>
                <i class="text-xl text-primary-100 cursor-pointer fa-brands  fa-square-instagram"></i>
            </div>
            <div className='w-[50%]'>
                <ul className="flex gap-5 items-center">
                    <li className='list-none cursor-pointer text-lg'>HOME</li>
                    <li className='list-none cursor-pointer text-lg'>ABOUT</li>
                    <li className='list-none cursor-pointer text-lg'>CONTACT</li>
                    <li className='list-none cursor-pointer text-lg'>WRITE</li>
                    <li className='list-none cursor-pointer text-lg'>LOGOUT</li>                    
                </ul>
            </div>
            <div className='flex w-[25%] gap-2 items-center'>
                <img className='w-10 h-10 rounded-[50%] cursor-pointer object-cover' src="https://yt3.ggpht.com/yti/AGOGRCrts_nN9jqAEQ1RJIuk-UbVUP6fdyhsomCKeJrSEg=s88-c-k-c0x00ffffff-no-rj" alt="" />
                <i class="text-lg cursor-pointer text-primary-50 fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
  )
}

export default TopBar