import React from 'react';
import './Review.css'

const Review = (props) => {
    const { review } = props;
    const { img, name, description, rating } = review;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <div className='reviewer-info'>
                <p className='reviewer-name'>{name}</p>
                <p className='reviewer-description'>{description}</p>
                <p><small>Rating: {rating}</small></p>
            </div>
        </div>
    );
};

export default Review;