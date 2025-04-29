import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogInPage from './Components/LogInPage';
import Employee from './Components/Employee';
import EmployeeDetails from './Components/EmployeeDetails';
import Dashboard from './Components/Dashboard';
import Tasks from './Components/Tasks';
import Employees from './Components/Employees';
import Settings from './Components/Settings';
import ErrorPage from './ErrorPage';

const route = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/',
    element: <LogInPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/tasks',
    element: <Tasks />
  },
  {
    path: '/employees',
    element: <Employees />
  },
  {
    path: '/settings',
    element: <Settings />
  },
  {
    path: '/employee/:id',
    element: <Employee />
  },
  {
    path: '/employeeDetails/:id',
    element: <EmployeeDetails />
  }
]);

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;