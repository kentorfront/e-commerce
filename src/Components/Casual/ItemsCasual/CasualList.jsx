import './CasualList.css'

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

    console.log(productsData);

    return (
        <div className="productsList">
            {productsData.map((product, index) => (
                <div key={index} className="product-item">
                    <img src={product.image} alt="" className="card-image" />
                    <div className="product-title">{product.name}</div>
                    {product.rating && product.rating[0] && (
                        <div className="rating">
                            <div className="rating-stars">
                                 {renderStars(product.rating[0].star)} {/*need to add avg later  */}
                            </div>
                            <div className="fromFive">
                                {product.rating[0].star} / 5
                            </div>
                            <div className="cost">
                                {product.cost}$
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
