import { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [initialData, setInitialData] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products/');
        let data = response.data[0].casual
        setInitialData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch products. Please try again later.');
      }
    };
    fetchData();
  }, []);


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
    <div className='products-main'>
      <div className="title">NEW ARRIVALS</div>
        <div className="products">
          <ul>
            {initialData.slice(0, 4).map((data, index) => (
              <li key={data.id || index}>
                <div className="image-container">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="name">{data.name}</div>
                <div className="stars">
                  {renderStars(data.rating[0].star)}
                  <div className="ratingScore">
                    <span>{data.rating[0].star}/</span>
                    <span className='fromFive'>5</span>
                  </div>
                </div>
                <div className="cost">
                  ${data.cost}
                </div>
              </li>
            ))}
          </ul>
        </div>
      <button className='ViewAll' onClick={() => navigate('/shop')}>View All</button>
    </div>
  );
}
