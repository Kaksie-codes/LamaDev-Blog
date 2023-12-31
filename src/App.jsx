import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Homepage from './pages/Homepage'
import Singlepage from './pages/Singlepage'
import Writepage from './pages/Writepage'
import Settingspage from './pages/Settingspage'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const user = true;
  return (
    <Router> 
      <TopBar/> 
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/post/:postId' element={<Singlepage/>}/>
          <Route path='/register' element={user ? <Navigate to='/'/> : <Registerpage/>}/>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Loginpage/>}/>
          <Route path='/settings' element={user ? <Settingspage/> : <Navigate to='/register'/>}/>
          <Route path='/write' element={user ? <Writepage/> : <Navigate to='/register'/>}/>          
      </Routes>
    </Router>
  )
}

export default App
