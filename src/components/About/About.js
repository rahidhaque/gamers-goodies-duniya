import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>About us</Card.Title>
                    <Card.Text>
                        Gamer's Goodies Dunias mission is to provide computer systems and services for businesses and individuals - systems that are state of the art, highly efficient, and reliable; service that is highly competent, dedicated, and timely.  Our ultimate objective is to be a complete support system for businesses and individuals, a support system that will empower our clients with enhanced productivity, increased competitiveness, and overall satisfaction.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;