import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myWebRouter from './Main_Paths/Paths'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myWebRouter}></RouterProvider>
  </React.StrictMode>,
)
