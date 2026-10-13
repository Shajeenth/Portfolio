import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NameComponent from './components/NameComponent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NameComponent />
  </StrictMode>
)
