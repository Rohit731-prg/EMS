import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogInPage from './Components/LogInPage'
import Admin from './Components/Admin'
import Employee from './Components/Employee'
import EmployeeDetails from './Components/EmployeeDetails'
import AddEmployee from './Components/AddEmployee'

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
  },
  {
    path: "/employeeDetails/:id",
    element: <EmployeeDetails />
  },
  {
    path: '/addEmployee',
    element: <AddEmployee />
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