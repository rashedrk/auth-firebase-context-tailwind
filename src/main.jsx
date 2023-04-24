import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'

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
