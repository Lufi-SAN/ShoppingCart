import { useState, createContext } from 'react'
import Navbar from './Navbar.jsx'
import '../Stylesheets/App.css'
import useProductsArray from '../Hooks/useProductsArray'
import { useParams } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import Cart from './Cart.jsx'

export const Context = createContext({})

function App() {
  const [cartItems, setCartItems] = useState([])
  const { products, error, loading } = useProductsArray();
  const { name } = useParams()

  if (loading) {
    return <p>Content Loading...</p>
  } else if(error) {
    return <p>Had a network error</p>
  }
  
  
  return (
    <>
      <header>
        <nav><Navbar cartItemCount={cartItems.length}/></nav>
      </header>
      <main>
        <Context.Provider value={{products, cartItems, setCartItems}}>
        {name === "cart" ? <Cart /> : <HomePage />}
        </Context.Provider>
      </main>
      <footer>

      </footer>
    </>
  )
}


export default App