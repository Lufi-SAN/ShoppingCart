import { Await, Outlet, defer, useLoaderData } from "react-router-dom"
import Navbar from "./Navbar"
import fetchDataFunction from "../Utilities/fetchDataFunction"
import "../index.css" 
import { Suspense, createContext, useState } from "react";

export function loader({request}) {
    let pathname = new URL(request.url).pathname
    let productsData = fetchDataFunction();
    return defer({productsData, pathname})
}

let cartContext = createContext([])

export default function Layout() {
    let componentProductsData = useLoaderData();
    let [cartItems,setCartItems] = useState([]);

    return (
      <>
        <header>
          <nav><Navbar cartItemCount={cartItems.length}/></nav>
        </header>

        <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={componentProductsData.productsData}>
        {(productsData) => {          
          console.log(productsData)
          return (
            <main>
              <cartContext.Provider value={{cartItems,setCartItems}}>
              <Outlet />
              </cartContext.Provider>
            </main>
          )
        }}
        </Await>
        </Suspense>

        <footer>
        COPYRIGHT 2024
        </footer>
      </>
    )
  }
  