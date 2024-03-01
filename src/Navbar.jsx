import {Link} from 'react-router-dom'
import homeImage from './assets/home.png'
import searchImage from './assets/search.png'
import shopBasketImage from './assets/shopping_basket.png'
import './navbar.css'

const Navbar = ({cartItemCount}) => {
    return <>
            <div className='container'>
                <div className="searchContainer">
                    <div><input type="text" /></div>
                    <div><img src={searchImage} alt="" /></div>
                </div>
                <Link to="/"><div><img src={homeImage} alt="Icon for link to homepage" /></div></Link>
                <div className='cartContainer'><Link to="cart"><div><img src={shopBasketImage} alt="Icon for link to checkout" /></div>{cartItemCount && <div id='cartNumber'>{cartItemCount}</div>}</Link></div>
            </div>
           </>
}

export default Navbar