import {Link} from 'react-router-dom'
import shopBasketImage from '/assets/shopping_basket.png'
import PropTypes from 'prop-types'

const Navbar = ({cartItemCount}) => {
    return <>
            <div className='container'>
                <ul>
                    <li key= "navlink1" ><Link to="/">Home</Link></li>
                    <li key= "navlink2" ><Link to="cart" style={{
                    textDecoration: 'none'
                }}><div className='cartContainer'><div><img src={shopBasketImage} alt="Icon for link to checkout" /></div><span>{cartItemCount}</span></div></Link></li>
                </ul>    
            </div>
           </>
}

Navbar.propTypes = {
     cartItemCount: PropTypes.number
 }

export default Navbar