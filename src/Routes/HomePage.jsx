import { useContext } from 'react'
import '../Stylesheets/HomePage.css'
import { Context } from './App'
import PropTypes from 'prop-types'

const HomePage = () => {
    const {products} = useContext(Context)

    return (
        <div>
            {/* <ImageSlider image={""} /> */}
            <ProductList listOfProducts = {products} />
        </div>
    )
}

// const ImageSlider = ({image}) => {
//     return <><img src={image} /></>
// }

const ProductList = ({listOfProducts}) => {
    return (
        <section>
            <div className="productsCardContainer">
                {/* {listOfProducts.map(i => i + 1)} */}
            </div>
        </section>
    )
}

ProductList.propTypes = {
    listOfProducts: PropTypes.array
}

export default HomePage