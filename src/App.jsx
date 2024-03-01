import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [cartItems, setCartItems] = useState([])
  
  return (
    <>
      <Navbar cartItemCount={cartItems.length}/>
      <Outlet/>
    </>
  )
}


export default App
