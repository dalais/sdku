import React from "react";
import '../../css/layout/Logo.css';
import logo from '../../logo.svg';

const Logo = () => {
    return (
        <div className="App-logo">
            <img src={logo} alt="Logo"/>
        </div>
    );
};

export default Logo;