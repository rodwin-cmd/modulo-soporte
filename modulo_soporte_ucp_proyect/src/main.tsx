import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Hero } from './components/Hero'
import { Banner } from './components/Banner'
import { CuestionBox } from './components/CuestionBox'
import { CuestionMain } from './components/CuestionMain'
import { TopicAsistencia } from './components/TopicAsistencia'
import { Footer } from './components/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
    <Banner />
    <CuestionBox />
    <CuestionMain />
    <TopicAsistencia />
    <Footer />
  </StrictMode>,
)
