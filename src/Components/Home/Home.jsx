import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import './Home.css'
import Products from "../Products/Products";
import Footer from "../Footer/Footer";

 
export default function Home(){
    return(
        <>
            <Header />

            <div className="main">
                <div className="main-wrapper">
                    <div className="main-title">
                        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                    </div>
                    <div className="main-text">Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</div>
                    <Link to='/'><button>Shop Now</button></Link>
                    <div className="info-card">
                        <div className="info1">
                            <div className="info-number">200+</div>
                            <div className="info-text">International Brands</div>
                        </div>
                        <div className="ver-line"></div>
                        <div className="info2">
                            <div className="info-number">2,000+</div>
                            <div className="info-text">High-Quality Products</div>
                        </div>
                        <div className="ver-line"></div>
                        <div className="info3">
                            <div className="info-number">20,000+</div>
                            <div className="info-text">Happy Customers</div>
                        </div>
                    </div>
                    <div className="star1"></div>
                    <div className="star2"></div>
                </div>
            </div>

            
            <div className="brands">
                <div className="brands-wrapper">
                    <div className="ver"></div>
                    <div className="zara"></div>
                    <div className="gucci"></div>
                    <div className="prada"></div>
                    <div className="calvin"></div>
                </div>
            </div>

            <Products />

            <div className="browse">
                <div className="title">BROWSE BY DRESS STYLE</div>
                <div className="category">
                    <div className="browse-top">
                        <Link to='/shop/casual'><div className="casual"></div></Link>
                        <Link><div className="formal"></div></Link>
                    </div>
                    <div className="browse-bottom">
                        <Link><div className="party"></div></Link>
                        <Link><div className="gym"></div></Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}