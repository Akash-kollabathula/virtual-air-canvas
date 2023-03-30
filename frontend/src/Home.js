import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App'
import Camera from './Camera'
import Files from './Files'
export default function Home() {
    const router=createBrowserRouter([{
        path:'/',
        element:<App/>
    },{
path:'/camera',
element:<Camera/>
    },{
      path:'/files',
      element:<Files/>
    }])
  return (
    <RouterProvider router={router} />

  )
}
