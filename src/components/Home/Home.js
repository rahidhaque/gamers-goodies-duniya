import React from 'react';
import useReviews from '../../hooks/useReviews';
import product from '../../images/product.png'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='home-container'>
            <div className='title-container'>
                <div className='title-details'>
                    <h4 className='title-headline'>Welcome to Our World of Gamer's Gadgets</h4>
                    <p className='title-text'>Gamer's Goodies Duniya's mission is to provide computer systems and services for businesses and individuals - systems that are state of the art, highly efficient, and reliable; service that is highly competent, dedicated, and timely.  Our ultimate objective is to be a complete support system for businesses and individuals, a support system that will empower our clients with enhanced productivity, increased competitiveness, and overall satisfaction.
                    </p>
                </div>
                <div className='product-img-container'>
                    <img src={product} alt="" />
                </div>
            </div>
            <div className='customer-reviews-container'>
                <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Customer Reviews</h3>
                <div className='reviews'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;