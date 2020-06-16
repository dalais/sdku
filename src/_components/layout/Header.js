import React from 'react';
import '../../css/layout/Header.css';
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
    return (
            <header className="App-header">
                <Logo/>
                <Navbar />
            </header>
    );
};

export default Header;
