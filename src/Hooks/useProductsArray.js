import { useEffect } from 'react'

export default function useProductsArray() {
    let products = null;
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {products = json})
            .catch(err => {console.log(`There was a ${err} error`); return []})
    }, [])
    return products;
}