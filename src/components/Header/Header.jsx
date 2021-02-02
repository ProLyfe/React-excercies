import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {

    const [scroll, setScroll] = useState('header')

    useEffect(() => {
        window.addEventListener('scroll', () => {
        setScroll(window.pageYOffset)
        });
    }, []);

    const scrollBreakPoint = scroll > 2200 ? "header" : "header2"

    return (
        <header className={scrollBreakPoint}>
            <h1>Header</h1>
        </header>
    );
};

export default Header;