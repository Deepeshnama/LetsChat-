import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './components/login'
import { Link } from 'react-router-dom'

import { Route , Routes } from 'react-router-dom'
import Signup from './components/signup'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <>
    
      <nav>
        {/* <Button colorScheme='blue'>Button</Button> */}
         <Link className='lo' to="/login">Login</Link> 
         <Link className='singo' to="/signup">SignUp</Link>
      </nav>

      <Routes>
        <Route path='/login' element={<Loginpage/>}  />
        <Route path='/signup' element={<Signup/>}  />
      </Routes>

      {/* <Loginpage/>
      <Signup/> */}
    </>
  )
}

export default App;
