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
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductPage({ image, cost, ratings, name, type, id }) {
    const dispatch = useDispatch(); 
    const count = useSelector((state) => state.counter.value);
    let avgRating = useFindAvg(ratings)
    let [isWriteActive, setIsWriteActive] = useState(false)
    let [starsActive, setStarsActive] = useState(1)
    let [product, setProduct] = useState()
    const [review, setReview] = useState('')

    useEffect(() => { 
        const fetchProduct = async () => { 
            try { 
                const response = await axios.get(`http://localhost:8080/products/`); 
                setProduct(response.data); 
            } 
            catch (error) {
                    console.error('Error fetching product:', error); 
                } 
            };
                fetchProduct();

        }, [id]);    
                
        const handleSubmit = async (e) => { 
            e.preventDefault();
        
            let user = JSON.parse(localStorage.getItem('user')); // Ensure this is parsed from a JSON string
        
            const date = new Date();
            const newReview = { 
                email: user.email, 
                username: user.username, 
                star: starsActive, // Ensure we include the star rating
                review, 
                date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
            };
        
            const updatedProduct = {
                ...product[0][type].find(item => item.id === Number(id)), // Correctly find the product by id
                rating: [
                    ...product[0][type].find(item => item.id === Number(id)).rating, 
                    newReview
                ]
            };
        
            const updatedProducts = {
                ...product,
                [0]: {
                    ...product[0],
                    [type]: product[0][type].map(item => item.id === Number(id) ? updatedProduct : item)
                }
            };
        
            console.log('Updated Products Payload:', updatedProducts[0]);
        
            try {
                const response = await axios.put('http://localhost:8080/products/', updatedProducts[0]);
                console.log('Response:', response);
                alert('Review added successfully!');
            } catch (error) {
                console.error('Error updating product:', error.response || error);
            }
        };
        
        
        

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
                            <button className="write-review main-button" onClick={() => setIsWriteActive(!isWriteActive)}>{isWriteActive === false ? 'Write review' : 'Cancel'}</button>
                        </div>
                    </div>
                    {isWriteActive === false ?

                        <Reviews reviews={ratings}/> :

                        <>
                            <div className="starsToChange">
                                {[1, 2, 3, 4, 5].map((value) => ( 
                                    <button key={value} className={`button${value} buttonToAdd`} onClick={() => setStarsActive(value)} style={{ color: starsActive >= value ? '#FFC633' : '#F0F0F0' }} > ★ </button> 
                                ))}
                            </div>
                            
                            <input type="text" placeholder="Write More" className='allReviewInput' value={review} onChange={(e) => setReview(e.target.value)}/>

                            <button className="main-button post" onClick={handleSubmit}>POST</button>
                        </>
                        
                    }
                    
                </section>

                <section className="recommendation">

                </section>
            </div>
            <Footer />
        </>
    );
}
