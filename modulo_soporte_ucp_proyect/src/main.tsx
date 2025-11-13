import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TopicAsistencia } from './components/TopicAsistencia'
import { NotFoundPage } from './components/NotFoundPage'
import MainLayout from './components/layouts/MainLayout'
import { PreguntasFrecuentes } from './components/sections/PreguntasFrecuentes'
import { Seguridad } from './components/Seguridad'
import { TicketSoporte } from './components/TicketSoporte'
import { CuestionMain } from './components/CuestionMain'
import { TicketDashboard } from './components/TicketDasboard'


// ruta indice principal
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // 👈 Header + Footer
    children: [
      {
        index: true,
        element: <TopicAsistencia />, 
      },
      {
        path: "preguntas_frecuentes", 
        element: <PreguntasFrecuentes />,
      },
      {
        path: "seguridad", 
        element: <Seguridad />,
      },
      {
        path: "ticket_soporte", 
        element: <TicketSoporte />,
      },
      {
        path: "cuestion_main",
        element:<CuestionMain/>
      },
      {
        path: "ticket_soporte",
        element:<TicketSoporte/>
      },
      {
        path:"tickets",
        element: <TicketDashboard/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
