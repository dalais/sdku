import React from 'react';
import '../../css/layout/Header.css';
import Logo from "./Logo";
import NavbarContainer from "./Navbar";

const Header = () => {
    return (
            <header className="App-header">
                <Logo/>
                <NavbarContainer />
            </header>
    );
};

export default Header;
