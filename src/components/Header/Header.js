import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <h2>Gamer's Goodies Duniya</h2>
            <nav>
                <NavLink to="/home" style={({ isActive }) =>
                    (isActive ? { color: 'rgb(58, 166, 202)' } : { color: 'black' })}>Home</NavLink>
                <NavLink to="/reviews" style={({ isActive }) =>
                    (isActive ? { color: 'rgb(58, 166, 202)' } : { color: 'black' })}>Reviews</NavLink>
                <NavLink to='/dashboard' style={({ isActive }) =>
                    (isActive ? { color: 'rgb(58, 166, 202)' } : { color: 'black' })}>Dashboard</NavLink>
                <NavLink to='/blogs' style={({ isActive }) =>
                    (isActive ? { color: 'rgb(58, 166, 202)' } : { color: 'black' })}>Blogs</NavLink>
                <NavLink to='/About' style={({ isActive }) =>
                    (isActive ? { color: 'rgb(58, 166, 202)' } : { color: 'black' })}>About</NavLink>
            </nav>
        </div>
    );
};

export default Header;