import { useState } from 'react'
import Navbar from './Navbar.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [cartItems, setCartItems] = useState([ /* List of Items in Cart */])
  
  return (
    <>
      <Navbar cartItemCount={cartItems.length}/>
      <Outlet/>
    </>
  )
}


export default App
