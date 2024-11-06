import './ProductPage.css';
import star from './images/star.svg';
import halfStar from './images/half-star.svg'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useFindAvg from '../HOC/useFindAvg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';
import Reviews from './reviews/Reviews';
import { useState } from 'react';

export default function ProductPage({ image, cost, ratings, name, type }) {
    const dispatch = useDispatch(); 
    const count = useSelector((state) => state.counter.value);
    let avgRating = useFindAvg(ratings)
    let [isWriteActive, setIsWriteActive] = useState(false)

    let stars = (rating) => {
        let starImages = [];
        for (let i = 1; i <= Math.floor(rating); i++) {
            starImages.push(<img key={i} src={star} alt="Full Star" className="star-icon" />);
        }
        if (rating % 1 !== 0) {
            starImages.push(<img key={'half'} src={halfStar} alt="Half Star" className="star-icon" />);
        }
        return starImages;
    };
    

    return (
        <>
            <Header />
            <div className="product-page-Main">
                <section className="productInfo">
                    <div className="current-page">
                        Home <MdKeyboardArrowRight /> Shop <MdKeyboardArrowRight /> Casual <MdKeyboardArrowRight /> <span className='currentPageType'>{type}</span>
                    </div>
                    <div className="button-side-productInfo">
                        <img src={image} alt="" className='productImage' />
                        <div className="moreInfo">
                            <div className="titleProductInfo">
                                {name}
                            </div>
                            <div className="rating">
                                <span className="stars">{stars(avgRating)} </span>
                                <span className="from">{avgRating} / 5</span>
                            </div>
                            <div className="cost">
                                ${cost}
                            </div>
                            <div className="gor-line"></div>
                            <div className="size">
                                <div className="choose-size-title">
                                    Choose Size
                                </div>
                                <div className="sizes">
                                    <button className="size-button">Small</button>
                                    <button className="size-button">Medium</button>
                                    <button className="size-button">Large</button>
                                    <button className="size-button">X-Large</button>
                                </div>
                            </div>
                            <div className="gor-line"></div>
                            <div className="add-to-cart">
                                <div className="quantity-container">
                                    <button className="decrease" onClick={() => dispatch(decrement())} disabled={count > 0 ? false : true}>-</button>
                                    <div className="quantity">{count}</div>
                                    <button className="increase" onClick={() => dispatch(increment())}>+</button>
                                </div>
                                <button className="addToCart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="gor-line"></div>
                <section className="ratings">
                    <div className="section-title">
                        Rating & Reviews
                    </div>
                    <div className="all-reviews-header">
                        <div className="left-header-review">
                            All Reviews <span className='totalQuantity'>({ratings.length})</span>
                        </div>
                        <div className="right-header-review">
                            <button className="write-review" onClick={() => setIsWriteActive(!isWriteActive)}>{isWriteActive === false ? 'Write review' : 'Cancel'}</button>
                        </div>
                    </div>
                    {isWriteActive === false ?

                        <Reviews reviews={ratings}/> :
                        
                        
                        <input type="text" placeholder="Write More"/>
                    }
                    
                </section>

                <section className="recommendation">

                </section>
            </div>
            <Footer />
        </>
    );
}
