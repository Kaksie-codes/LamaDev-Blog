import React from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
  return (
    <>
        <Header/>
        <div className='container flex items-center'>
            <Posts/>
            <Sidebar/>
        </div>
    </>
  )
}

export default Homepage