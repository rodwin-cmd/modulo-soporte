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
import { Login } from './components/login/Login'
import { ProtectedRoute } from './components/login/ProtectedRoute'
import { AdminRoute } from './components/login/AdminRoute'
import { AuthProvider } from './contextAut/AuthContext'


// ruta indice principal, rutas protegidas
const router = createBrowserRouter([
   {
    path: "/login",
    element: <Login />,
  },
  
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
        element: 
        <ProtectedRoute>
          <TicketSoporte />
        </ProtectedRoute>
        
      },
      {
        path: "cuestion_main",
        element:<CuestionMain/>
      },
       {
         path: "ticket_dashboard",
        element:
        <ProtectedRoute>
          <TicketDashboard/>
        </ProtectedRoute>
       },
      {
        path:"tickets",
        element: 
        <AdminRoute>
          <TicketDashboard/>
        </AdminRoute>
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
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
