import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <nav className='mainNavigation'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/history">History</NavLink>
        </nav>
    )
}

export default MainNavigation;