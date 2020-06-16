import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import '../../css/layout/Navbar.css';

const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <ul className="nav items">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/news">News</Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
};

export default Navbar;