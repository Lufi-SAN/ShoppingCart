import '../Stylesheets/HomePage.css'
import PropTypes from 'prop-types'

const HomePage = () => {
    
    return (
        <div style={{backgroundColor: "red"}}>
            {/* <ImageSlider image={""} /> */}
            <ProductList listOfProducts = {[1,2,3]} />
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
            <div>Wassup to home page</div>
        </section>
    )
}

ProductList.propTypes = {
    listOfProducts: PropTypes.array
}

export default HomePage