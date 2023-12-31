import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const TopBar = () => {
    const user = false;
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

  return (
    <div className='josefin-font bg-white h-[60px] sticky top-0 z-10'>
        <div className="container flex items-center h-full justify-between">
            <div  className='flex gap-3 items-center'>
                <Link to='/'>
                    <h1 className='text-4xl'>en<span className='text-red-500'>Blogg</span></h1>
                </Link>                
            </div>
            <div className=''>
                <ul className="flex gap-5 items-center">
                    <li className='list-none cursor-pointer text-lg'>
                        <Link to='/'>
                            HOME
                        </Link>
                    </li>
                    <li className='list-none cursor-pointer text-lg'>
                        <Link to='/'>
                            ABOUT
                        </Link>
                    </li>
                    <li className='list-none cursor-pointer text-lg'>
                        <Link to='/'>
                            CONTACT
                        </Link>
                    </li>
                    <li className='list-none cursor-pointer text-lg'>
                        <Link to='/write'>
                            WRITE
                        </Link>
                    </li>
                    <li className='list-none cursor-pointer text-lg'>
                        {user && 'LOGOUT'}
                    </li>                    
                </ul>
            </div>
            <div className='flex  gap-2 items-center'>  
                <div className='rounded-lg relative px-[10px] flex items-center gap-2 border border-primary-400'>
                    <i className="text-lg cursor-pointer text-primary-50 fa-solid fa-magnifying-glass"></i> 
                    <input className=' p-1 ml-[10px] outline-none ' type="text" placeholder='Search...' />                    
                </div>
                {
                    isLoginPage || isRegisterPage ? (
                        null
                    ) : (
                         user ? (
                            <img className='w-10 h-10 rounded-[50%] cursor-pointer object-cover' src="https://yt3.ggpht.com/yti/AGOGRCrts_nN9jqAEQ1RJIuk-UbVUP6fdyhsomCKeJrSEg=s88-c-k-c0x00ffffff-no-rj" alt="" />
                       ) : (
                           <>
                               <Link to='/login'>
                                   <button className="bg-teal-500 text-white cursor-pointer border-none pt-[8px] pb-[4px] px-6 rounded-xl">LOGIN</button>
                               </Link>
                               <Link to='/register'>
                                   <button className="bg-teal-500 text-white cursor-pointer border-none pt-[8px] pb-[4px] px-6 rounded-xl">REGISTER</button>
                               </Link>                                            
                           </>
                       )
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default TopBar