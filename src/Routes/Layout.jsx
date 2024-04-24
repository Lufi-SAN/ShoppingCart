import { Outlet, useLoaderData } from "react-router-dom"
import Navbar from "./Navbar"
import fetchDataFunction from "../Utilities/fetchDataFunction"

export async function loader() {
    let productsList = await fetchDataFunction();
    console.log(productsList);
    return productsList;
}

export default function Layout() {
    let compProductsList = useLoaderData();
    let cartItems = [1,2,3]


    return (
      <>
        <header>
          <nav><Navbar cartItemCount={cartItems.length}/></nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
        COPYRIGHT 2024
        </footer>
      </>
    )
  }
  