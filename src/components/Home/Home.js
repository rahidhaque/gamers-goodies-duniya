import React from 'react';
import product from '../../images/product.png'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='title-container'>
                <h2 className='title-headline'>Welcome to Our World of Gamer's Gadgets</h2>
                <p className='title-description'>Gamer's Goodies Duniya's mission is to provide computer systems and services for businesses and individuals - systems that are state of the art, highly efficient, and reliable; service that is highly competent, dedicated, and timely.  Our ultimate objective is to be a complete support system for businesses and individuals, a support system that will empower our clients with enhanced productivity, increased competitiveness, and overall satisfaction.
                </p>
            </div>
            <div className='product-img-container'>
                <img src={product} alt="" />
            </div>
        </div>
    );
};

export default Home;