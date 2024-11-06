import { Link } from 'react-router-dom';
import './CasualList.css';

export default function CasualList({ productsData }) {
    if (!productsData || productsData.length === 0) {
        return <p>No products to display.</p>;
    }

    const renderStars = (score) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= score ? 'filled-star star' : 'empty-star star'}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="productsList">
            {productsData.map((product, index) => {
                let path = `/shop/casual/productDetail/${product.id}`;
                return (
                    <Link to={path} key={index} className='linkToPage'>
                        <div className="product-item">
                            <img src={product.image} alt="" className="card-image" />
                            <div className="product-title">{product.name}</div>
                            {product.rating && product.rating[0] && (
                                <div className="rating">
                                    <div className="rating-stars">
                                        {renderStars(product.rating[0].star)}
                                    </div>
                                    <div className="fromFive">
                                        {product.rating[0].star} / 5
                                    </div>
                                    <div className="costCasual">
                                        {product.cost}$
                                    </div>
                                </div>
                            )}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
