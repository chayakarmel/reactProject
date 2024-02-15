
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import BusinessData from './components/businessData/BusinessData'
import ServicesList from './components/services/ServicesList'
import * as React from 'react';
import AdminPage from './components/admin/AdminPage'
import AppointmentList from './components/appointment/AppointmentList'
import EditBusinessData from './components/businessData/EditBusinessData'
import App from './App'
import AdminHome from './components/admin/AdminHome'


// // npm install react-router-dom localforage match-sorter sort-by

const router = createBrowserRouter([{
  path: '',
  element: <App />,
  errorElement: <div>Error</div>,
}
  , {
  path: '/Admin',
  element: <AdminPage />,
  children: [
    {
      path: 'ServicesList',
      element: <ServicesList />,
    }
    , {
      path: 'Appointments',
      element: <AppointmentList />,
    },
    {
      path: 'EditBusinessData',
      element: <EditBusinessData />,
    }
  ]
}


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* צריך לשנות למשפט למטה 3 */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
