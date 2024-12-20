import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
        <BrowserRouter>
        <ColorModeScript/>
        <App />
        </BrowserRouter>
    </ChakraProvider>

   
  </StrictMode>,
)

