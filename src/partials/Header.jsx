import * as FaIcons from 'react-icons/fa';

import logo from './../assets/Temtem_logo.png';
import './Header.css';

export const Header = ({ getSearch }) => {
    return (
        <nav className='header'>
            <div className='div_header container'>
                <div className='div_logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='div_search'>
                    <div>
                        <FaIcons.FaSearch />
                    </div>
                    <input
                        type="search"
                        onChange={(e) => getSearch(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
}