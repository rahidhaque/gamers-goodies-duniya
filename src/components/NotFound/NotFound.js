import React from 'react';
import logoNotFound from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <img src={logoNotFound} alt="" />
        </div>
    );
};

export default NotFound;