import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../../css/layout/Navbar.css';

const Navbar = (props) => {
    const AdminBtn = () => {
        if (props.auth !== null) {
            return (
                <li className="nav-item">
                    <Link to="/admin">Admin</Link>
                </li>
            )
        }
        return null;
    };

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
                <AdminBtn/>
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state
});

const NavbarContainer = connect(
    mapStateToProps
)(Navbar);

export default NavbarContainer;