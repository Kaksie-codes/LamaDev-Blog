import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>     
     <TopBar/>
     <Homepage/>
    </div>
  )
}

export default App
