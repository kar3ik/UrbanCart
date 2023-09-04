import React from 'react'
import './App.css'
import {createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import Rootlayout from './components/Rootlayout'
import Description from './components/Description'


const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Dashboard />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/home' element={<Description />} />

    </Route>
  ))
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
    
  )
}

export default App