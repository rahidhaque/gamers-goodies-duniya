import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import product from '../../images/product.png'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    let navigate = useNavigate();
    return (
        <div className='home-container'>
            <div className='title-container'>
                <div className='title-details'>
                    <h4 className='title-headline'>Welcome to Our World of Gamer's Gadgets</h4>
                    <p className='title-text'>Distributing and making selective premium brands available all over Bangladesh through dealer network. We provide top notch after sales support for both our customers and retailers. We engage with gaming enthusiasts and get feedback to further improve. We here at Gamer's Goodies Duniya has been endorsing eSports from its inception.
                    </p>
                </div>
                <div className='product-img-container'>
                    <img src={product} alt="" />
                </div>
            </div>
            <div className='customer-reviews-container'>
                <h3 className='review-container-title'>Customer Reviews</h3>
                <div className='reviews'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
                <div className='btn-container'>
                    <Button onClick={() => navigate("/reviews")} variant="info">Sell All Reviews</Button>
                </div>
            </div>
        </div >
    );
};

export default Home;