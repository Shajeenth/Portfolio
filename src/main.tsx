import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles.css'
import Name from './components/Name.tsx'
import ProjectScroll from './components/ProjectScroll.tsx'
import Gap from './components/Gap.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Name />
    <ProjectScroll />
    <Gap />
  </StrictMode>,
)
