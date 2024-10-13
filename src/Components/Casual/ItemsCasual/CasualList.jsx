import './CasualList.css'

export default function CasualList({ productsData }) {
    if (!productsData || productsData.length === 0) {
        return <p>No products to display.</p>;
    }

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
                                {'★'.repeat(product.rating[0].star)}
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
