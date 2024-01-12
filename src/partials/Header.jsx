import React from 'react';
import * as FaIcons from 'react-icons/fa';

import './Header.css';

export const Header = ({ obtenerSearch }) => {
    return (
        <nav className='header'>
            <div className='div_header'>
                <div className='div_logo'>
                    <img src='/assets/react.svg' alt="logo" />
                </div>
                <div className='div_search'>
                    <div>
                        <FaIcons.FaSearch />
                    </div>
                    <input
                        type="search"
                        onChange={(e) => obtenerSearch(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
}