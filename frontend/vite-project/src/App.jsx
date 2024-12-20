 Ashfaq
import React from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Loginpage from './components/login';
import Signup from './components/signup';
import { Box, Button, HStack } from '@chakra-ui/react';
import ChatPage from './components/Pages/ChatPage';
import ThemeToggle from './components/ThemeToggle'; // Import the theme toggle

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const authPaths = ['/', '/signup'];
  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <div style={{ width: "auto", padding: "10px" }}>
      {/* Header Section */}
      {!isAuthPage && (
        <HStack spacing={4} mb={4} justifyContent="flex-end">
          <ThemeToggle /> {/* Add Dark Mode Toggle */}
        </HStack>
      )}

      {/* Auth Navigation */}
      {isAuthPage && (
        <HStack spacing={4} mb={4} justifyContent="center">
          <Button
            as={NavLink}
            to="/"
            colorScheme="blue"
            variant={location.pathname === "/" ? "solid" : "outline"}
            size="md"
          >
            Login
          </Button>
          <Button
            as={NavLink}
            to="/signup"
            colorScheme="blue"
            variant={location.pathname === "/signup" ? "solid" : "outline"}
            size="md"
          >
            SignUp
          </Button>
        </HStack>
      )}

      {/* Main Content */}

 main
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
