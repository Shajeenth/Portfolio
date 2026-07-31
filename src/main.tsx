import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles.css'
import Name from './components/Name.tsx'
import ProjectScroll from './components/ProjectScroll.tsx'
import Gap from './components/Gap.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-[#05070b] lg:flex">
      <Name />
      <div
        className="flex-1 lg:ml-[28rem]"
        style={{
          backgroundColor: '#0a0f16',
          backgroundImage:
            'linear-gradient(rgba(212, 160, 23, 0.16) 2px, transparent 2px), linear-gradient(90deg, rgba(212, 160, 23, 0.16) 2px, transparent 2px)',
          backgroundSize: '48px 48px',
        }}
      >
        <ProjectScroll />
        <Gap />
      </div>
    </div>
  </StrictMode>,
)
