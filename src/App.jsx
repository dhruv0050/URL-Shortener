import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layouts'
import LandingPage from './pages/landing'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import RedirectLink from './pages/redirect-link'
import UrlProvider from './context'
import RequireAuth from './components/require-auth'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/dashboard',
        element:
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
      },
      {
        path: '/auth',
        element: <Auth />
      },
      {
        path: '/link/:id',
        element: 
        <RequireAuth>
          <Link />
        </RequireAuth>
          // {contains all the stats and clicks that has happended on the link}
      },
      {
        path: '/:id',
        element: <RedirectLink />
      },
    ]
  }
])
function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  )
}

export default App

