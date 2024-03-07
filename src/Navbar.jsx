import {Link} from 'react-router-dom'
import homeImage from '../public/assets/home.png'
import searchImage from '../public/assets/search.png'
import shopBasketImage from '../public/assets/shopping_basket.png'
import './navbar.css'

const Navbar = ({cartItemCount}) => {
    return <>
            <div className='container'>
                <div className="searchContainer">
                    <div><input type="text" /></div>
                    <div><img src={searchImage} alt="" /></div>
                </div>
                <Link to="/"><div><img src={homeImage} alt="Icon for link to homepage" /></div></Link>
                <Link to="cart" style={{
                    textDecoration: 'none'
                }}><div className='cartContainer'><div><img src={shopBasketImage} alt="Icon for link to checkout" /></div><span>{cartItemCount}</span></div></Link>
            </div>
           </>
}

export default Navbar