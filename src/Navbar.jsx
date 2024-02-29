import {Link} from 'react-router-dom'
import homeImage from './assets/home.png'
import searchImage from './assets/search.png'
import shopBasketImage from './assets/shopping_basket.png'
import './navbar.css'

const Navbar = ({cart}) => {
    return <>
            <div className='container'>
                <div className="searchContainer">
                    <div><input type="text" /></div>
                    <div><img src={searchImage} alt="" /></div>
                </div>
                <div><Link to="/"><img src={homeImage} alt="Icon for link to homepage" /></Link></div>
                <div id='cartContainer'><div><Link to="cart"><img src={shopBasketImage} alt="Icon for link to checkout" /></Link></div>{cart && <div id='cartNumber'>{cart}</div>}</div>
            </div>
           </>
}

export default Navbar