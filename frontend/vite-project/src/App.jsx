import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './components/login'
import { Link } from 'react-router-dom'

import { Route , Routes } from 'react-router-dom'
import Signup from './components/signup'
import { Button, ButtonGroup } from '@chakra-ui/react'
import ChatPage from './components/Pages/ChatPage'
import Front from './components/Front'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        {/* Front page (home page) */}
        <Route path="/" element={<Front />} />

        {/* Login, Signup, and Chat pages */}
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ChatPage />} />
      </Routes>
    </>
  )
}


export default App
