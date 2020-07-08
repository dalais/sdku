import React from "react";
import {Link} from "react-router-dom";
import '../../css/layout/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav items">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;