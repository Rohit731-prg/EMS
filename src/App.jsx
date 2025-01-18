import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogInPage from './Components/LogInPage'
import Admin from './Components/Admin'
import Employee from './Components/Employee'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInPage />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/employee/:id",
    element: <Employee />
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App