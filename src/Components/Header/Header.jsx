import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import './Header.css' 

export default function Header(){
    return(
        <header>                
            <div className="top-header">Sign up and get 20% off to your first order.<Link>Sign Up Now</Link></div>
            <div className="header-wrapper">
                <div className="logo"></div>
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
                    <Link><MdAccountCircle /></Link>
                </div>
            </div>
        </header>
    )
}