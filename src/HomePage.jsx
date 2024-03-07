import './HomePage.css'
import { useEffect } from 'react'

const HomePage = () => {
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    })
    
    return (<div>
            <ImageSlider image={""} />
            <ProductList />
           </div>
           )
}

const ImageSlider = ({image}) => {
    return <><img src={image} /></>
}

const ProductList = () => {
    return 
}

export default HomePage