import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import './Header.css' 

export default function Header(){
    return(
        <header style={{height: !localStorage.getItem('user') ? '140px' : '100px'}}>                
            <div className="top-header" style={{display: !localStorage.getItem('user') ? 'flex' : 'none'}}>Sign up and get 20% off to your first order.<Link to='/register'>Sign Up Now</Link></div>
            <div className="header-wrapper">
                <Link to='/'><div className="logo"></div></Link>
                <div className="links">
                    <Link to='/shop'>Shop</Link>
                    <Link to='/'>On Sale</Link>
                    <Link to='/'>New Arrivals</Link>
                    <Link to='/'>Brands</Link>
                </div>
                <div className="search">
                    <FaSearch />
                    <input type="text" placeholder='Search for products...'/>
                </div>
                <div className="profile-and-cart">
                    <Link to='/'><FaShoppingCart /></Link>
                    <Link to='/profile'><MdAccountCircle /></Link>
                </div>
            </div>
        </header>
    )
}