import React from 'react'

const SinglePost = () => {
  return (
    <div className='flex-[9]'>
        <div>
            <img className='h-[300px] w-full object-cover rounded-md' src="https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h1 className='text-center lora-font m-[10px] text-3xl relative'>
                Lorem ipsum dolor sit amet
                <div className='text-base absolute flex items-center gap-3 right-0 top-[50%] -translate-y-1/2'>
                    <i className="fa-solid fa-pen-to-square cursor-pointer text-green-700"></i>
                    <i className="fa-solid fa-trash-can cursor-pointer text-red-700"></i>
                </div>
            </h1>
            <div className='veralaRound-font text-primary-500 flex items-center justify-between text-base mb-5'>
                <span>Author: <b>Nsikak Akpan</b></span>
                <span>1 hour ago</span>
            </div>
            <p className='leading-6  text-primary-50 text-lg first-letter:text-3xl first-letter:ml-5 first-letter:font-semibold'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut porro optio atque deserunt dolore voluptate, 
                quia excepturi in alias consectetur omnis. Ut modi temporibus cumque iure ea aspernatur neque dicta.
            </p>
        </div>
    </div>
  )
}

export default SinglePost