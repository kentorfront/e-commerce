import './ProductPage.css';
import star from './images/star.svg';
import halfStar from './images/half-star.svg';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useFindAvg from '../HOC/useFindAvg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';
import Reviews from './reviews/Reviews';
import { useEffect, useState } from 'react';
import axios from 'axios';



const StarRating = ({ rating }) => {
    const starImages = Array.from({ length: Math.floor(rating) }, (_, i) => (
        <img key={i} src={star} alt="Full Star" className="star-icon" />
    ));
    if (rating % 1 !== 0) {
        starImages.push(<img key={'half'} src={halfStar} alt="Half Star" className="star-icon" />);
    }
    return <>{starImages}</>;
};

export default function ProductPage({ image, cost, ratings, name, type, id }) {
    const dispatch = useDispatch(); 
    const count = useSelector((state) => state.counter.value);
    const avgRating = useFindAvg(ratings);

    const [isWriteActive, setIsWriteActive] = useState(false);
    const [starsActive, setStarsActive] = useState(1);
    const [product, setProduct] = useState(null);
    const [review, setReview] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch all products once on mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/products`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const user = JSON.parse(localStorage.getItem('user')) || { email: 'guest@example.com', username: 'Guest' };
        const date = new Date();

        const newReview = {
            email: user.email,
            username: user.username,
            star: starsActive,
            review: review,
            date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
        };

        try {
            
            const updatedProduct = { ...product }

            console.log(updatedProduct);

            await axios.put("http://localhost:8080/products", updatedProduct);

            setErrorMessage('');
            setReview('');
            setIsWriteActive(false);
        } catch (error) {
            console.error('Failed to submit review:', error);
            setErrorMessage('Failed to submit review. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
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
                        <img src={image} alt={name} className='productImage' />
                        <div className="moreInfo">
                            <div className="titleProductInfo">{name}</div>
                            <div className="rating">
                                <span className="stars"><StarRating rating={avgRating} /></span>
                                <span className="from">{avgRating} / 5</span>
                            </div>
                            <div className="cost">${cost}</div>
                            <div className="gor-line"></div>
                            <div className="size">
                                <div className="choose-size-title">Choose Size</div>
                                <div className="sizes">
                                    {['Small', 'Medium', 'Large', 'X-Large'].map((size, index) => (
                                        <button key={index} className="size-button">{size}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="gor-line"></div>
                            <div className="add-to-cart">
                                <div className="quantity-container">
                                    <button className="decrease" onClick={() => dispatch(decrement())} disabled={count <= 0}>-</button>
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
                    <div className="section-title">Rating & Reviews</div>
                    <div className="all-reviews-header">
                        <div className="left-header-review">
                            All Reviews <span className='totalQuantity'>({ratings.length})</span>
                        </div>
                        <div className="right-header-review">
                            <button
                                className={`write-review main-button ${isWriteActive ? 'active' : ''}`}
                                onClick={() => setIsWriteActive(!isWriteActive)}
                            >
                                {isWriteActive ? 'Cancel' : 'Write review'}
                            </button>
                        </div>
                    </div>
                    {!isWriteActive ? (
                        <Reviews reviews={ratings} />
                    ) : (
                        <>
                            <div className="starsToChange">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <button
                                        key={value}
                                        className={`button${value} buttonToAdd`}
                                        onClick={() => setStarsActive(value)}
                                        style={{ color: starsActive >= value ? '#FFC633' : '#F0F0F0' }}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                            <input
                                type="text"
                                placeholder="Write More"
                                className='allReviewInput'
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                            <button
                                className="main-button post"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'POST'}
                            </button>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                        </>
                    )}
                </section>
                <section className="recommendation">
                    {/* Placeholder for future recommendation section */}
                </section>
            </div>
            <Footer />
        </>
    );
}
