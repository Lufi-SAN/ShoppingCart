import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState(0)
  
  return (
    <>
      <Navbar cart={cart}/>
      <Outlet/>
    </>
  )
}


export default App
