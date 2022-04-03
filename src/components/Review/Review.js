import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { review } = props;
    const { img, name, description, rating } = review;
    return (
        <div className='review'>
            <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <small>Rating: {rating}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;