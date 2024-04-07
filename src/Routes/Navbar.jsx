import {Link} from 'react-router-dom'
import homeImage from '/assets/home.png'
import searchImage from '/assets/search.png'
import shopBasketImage from '/assets/shopping_basket.png'
import '../Stylesheets/navbar.css'
import PropTypes from 'prop-types'

const Navbar = ({cartItemCount}) => {
    return <>
            <div className='container'>
                <form className="searchContainer">
                    <input type="search" />
                    <div><img src={searchImage} alt="" /></div>
                </form>
                <ul>
                    <li key= "navlink1" ><Link to="/"><div><img src={homeImage} alt="Icon for link to homepage" /></div></Link></li>
                    <li key= "navlink2" ><Link to="cart" style={{
                    textDecoration: 'none'
                }}><div className='cartContainer'><div><img src={shopBasketImage} alt="Icon for link to checkout" /></div><span>{cartItemCount}</span></div></Link></li>
                </ul>    
            </div>
           </>
}

Navbar.propTypes = {
    cartItemCount: PropTypes.array
}

export default Navbar