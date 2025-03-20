import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles.css'
import Name from './components/Name.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Name />
  </StrictMode>,
)
