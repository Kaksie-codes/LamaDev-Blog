import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex-[3] bg-primary-200 m-5 p-7 pb-[30px] rounded-xl flex flex-col items-center'>
        <div className='flex flex-col items-center'>
            <span className='veralaRound-font text-xs text-primary-400 font-semibold leading-5 text-center uppercase m-[10px] p-[5px] w-[80%] border-y-[1px] border-primary-300'>About Me</span>
            <img className='w-10 h-10 mt-[15px] rounded-[50%] cursor-pointer object-cover' 
                src="https://yt3.ggpht.com/yti/AGOGRCrts_nN9jqAEQ1RJIuk-UbVUP6fdyhsomCKeJrSEg=s88-c-k-c0x00ffffff-no-rj" alt="" />
            <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nemo odit hic laudantium facere provident dolor, 
                aperiam quaerat alias velit dolorem.
            </p>
        </div>
        <div className='flex flex-col items-center mt-[15px]'>
            <span className='veralaRound-font text-xs text-primary-400 font-semibold leading-5 text-center uppercase m-[10px] p-[5px] w-[80%] border-y-[1px] border-primary-300'>Categories</span>
            <ul className='mb-[30px] grid place-items-center grid-cols-2 gap-4 gap-y-3'>
                <li className='inline-block w-[50%]  cursor-pointer'>Health</li>
                <li className='inline-block w-[50%]  cursor-pointer'>Sports</li>
                <li className='inline-block w-[50%]  cursor-pointer'>Cinema</li>
                <li className='inline-block w-[50%]  cursor-pointer'>Health</li>
                <li className='inline-block w-[50%]  cursor-pointer'>Tech</li>
                <li className='inline-block w-[50%]  cursor-pointer'>Lifestyle</li>
                <li className='inline-block w-[50%]  cursor-pointer'>Music</li>
                <li className='inline-block w-[50%]  cursor-pointer'>Fashion</li>
            </ul>
        </div>
        <div className='flex flex-col items-center '>
            <span className='veralaRound-font text-xs text-primary-400 font-semibold leading-5 text-center uppercase m-[10px] p-[1px] w-[80%] border-y-[1px] border-primary-300'>follow us</span>
            <div>
                <i class="text-xl text-primary-100 cursor-pointer fa-brands fa-facebook"></i>
                <i class="text-xl text-primary-100 cursor-pointer fa-brands  fa-x-twitter"></i>
                <i class="text-xl text-primary-100 cursor-pointer fa-brands  fa-pinterest"></i>
                <i class="text-xl text-primary-100 cursor-pointer fa-brands  fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar