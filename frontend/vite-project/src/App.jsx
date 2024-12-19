import React from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Loginpage from './components/login';
import Signup from './components/signup';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div>
    
      
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', backgroundColor: '#333' }}>
        
        <NavLink
          to="/login"
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
      </nav>

      
      <Box p={2}>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
