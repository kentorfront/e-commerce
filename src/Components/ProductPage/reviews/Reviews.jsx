import './Reviews.css';
import star from '../images/star.svg';
import halfStar from '../images/half-star.svg'

export default function Reviews({ reviews }){
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

    return(
        <div className="reviews-container">
            {reviews.map((review, index) => {
                return(
                    <li className='review' key={index}>
                        <div className="stars-reviews">{stars(review.star)}</div>
                        <div className="name-review">{review.username}</div>
                        <div className="review-data">"{review.review}"</div>
                        <div className="review-date">Posted in {review.date}</div>
                    </li>
                )
            })}
        </div>
    )
   
}