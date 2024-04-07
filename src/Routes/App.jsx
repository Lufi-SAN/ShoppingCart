import { useState, createContext } from 'react'
import Navbar from './Navbar.jsx'
import '../Stylesheets/App.css'
import { Outlet } from 'react-router-dom'
import useProductsArray from '../Hooks/useProductsArray'

export const Context = createContext({})

function App() {
  const products = useProductsArray();
  const [productsArray, setProductsArray] = useState([])
  const [cartItems, setCartItems] = useState([])
  
  if (!products) {
    return <div>Content Loading...</div>
  } else {
    setProductsArray(products);
  }
  
  
  return (
    <>
      <header>
        <nav><Navbar cartItemCount={cartItems.length}/></nav>
      </header>
      <main>
        <Context.Provider value={{productsArray, cartItems, setCartItems}}>
        <Outlet/>
        </Context.Provider>
      </main>
      <footer>
        
      </footer>
    </>
  )
}


export default App
