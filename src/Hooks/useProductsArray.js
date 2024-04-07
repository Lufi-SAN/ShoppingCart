import { useState, useEffect } from 'react';

export default function useProductsArray() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.log(`There was a ${err} error`));
    }, []);

    return {products};
}
