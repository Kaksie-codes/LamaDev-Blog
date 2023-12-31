import React from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
  return (
    <>
        <Header/>
        <div className='container flex items-start mt-5'>
            <Posts/>
            <Sidebar/>
        </div>
    </>
  )
}

export default Homepage