import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <h2>Gamer's Goodies Duniya</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/About'>About</Link>
            </nav>
        </div>
    );
};

export default Header;