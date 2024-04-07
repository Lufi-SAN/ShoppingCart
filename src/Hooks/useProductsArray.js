import { useState, useEffect } from 'react';

export default function useProductsArray() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                            if(res.status >= 400) {throw new Error("Server error")}
                            return res.json()
                        }
                 )
            .then(json => setProducts(json))
            .catch(err => {
                            setError(err)
                        })
            .finally(setLoading(false));
    }, []);

    return {products, error, loading};
}
