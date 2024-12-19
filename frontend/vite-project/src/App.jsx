import React from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Loginpage from './components/login';
import Signup from './components/signup';
import { Box } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import ChatPage from './components/Pages/ChatPage';


function App() {
   const token = localStorage.getItem("token");
  return (
    <div style={{width:"auto" , padding:"10px", paddingRight:'500px', }}>
    
      
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', backgroundColor: '#333', borderRadius:'10px' }}>
        
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: isActive ? 'underline' : 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            backgroundColor: isActive ? '#555' : 'transparent',
            
          })}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#444')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = e.currentTarget.style.textDecoration === 'underline' ? '#555' : 'transparent')}
        >
          Login
        </NavLink>

        
        <NavLink
          to="/signup"
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: isActive ? 'underline' : 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            backgroundColor: isActive ? '#555' : 'transparent',
          })}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#444')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = e.currentTarget.style.textDecoration === 'underline' ? '#555' : 'transparent')}
        >
          SignUp
        </NavLink>

        {/* <Link to="/dashboard"> </Link> */}
      </nav>
      <Link to="/">Logout</Link>
      
      <Box p={2}>
      <Routes>
          
          <Route path="/" element={<Loginpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ChatPage />} />
        </Routes>
      </Box>
    </div>
  );
}


export default App;