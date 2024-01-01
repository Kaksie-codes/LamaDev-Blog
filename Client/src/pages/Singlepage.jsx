import React from 'react'
import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost'

const Singlepage = () => {
  return (
    <div className="mt-5">
        <div className="container">
            <div className='flex'>
                <SinglePost/>
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default Singlepage