import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import PrivateRoute from './routes/PrivateRoute/PrivateRoute'
import Orders from './components/Orders'
import Profile from './components/Profile'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path : '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>      
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={route}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
