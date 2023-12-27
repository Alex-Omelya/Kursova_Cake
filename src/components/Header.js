import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div><Link to="/">The Cakes</Link></div>
        </header>
    );
}

export default Header;
