import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layouts'
import LandingPage from './pages/landing'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import RedirectLink from './pages/redirect-link'


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/auth',
        element: <Auth/>
      },
      {
        path: '/link/:id',
        element: <Link/>  // {contains all the stats and clicks that has happended on the link}
      },
      {
        path: '/:id',
        element: <RedirectLink/>
      },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )    
}

export default App

