import React from 'react'
import NavBar from './component/NavBar'
import Home from './component/Home'
import {Routes, Route} from 'react-router-dom'
import Products from './component/Product'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/product' element={<Products/>} />
    
    </Routes>
    </>
  
  )
}

export default App
