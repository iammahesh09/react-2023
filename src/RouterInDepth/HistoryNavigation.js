import React from 'react';
import { NavLink } from 'react-router-dom';

const HistoryNavigation = () => {
    return (
        <nav className='historyNavigation'>
            <NavLink to="/history/history-1">History 1</NavLink>
            <NavLink to="/history/history-2">History 2</NavLink>
        </nav>
    )
}

export default HistoryNavigation;