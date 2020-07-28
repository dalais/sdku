import React from "react";
import {connect} from 'react-redux';
import {Link, useHistory} from "react-router-dom";
import '../../css/layout/Navbar.css';
import {iAx} from "../../index";
import store from "../../store";
import authAction from "../../store/auth/actions";

const Navbar = (props) => {
    const history = useHistory();

    const logout = () => {
        iAx.get('auth/logout')
            .then(res => {
                store.dispatch(authAction(res.data));
                history.push("/")
            })
    };

    const AdminBtn = () => {
        if ( props.is_logged !== undefined && props.is_logged) {
            return (
                <li className="nav-item">
                    <Link to="/admin">Admin</Link>
                </li>
            )
        }
        return null;
    };
    const LoginBtn = () => {
        if ( props.is_logged !== undefined && !props.is_logged) {
            return (
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
            )
        }
        return null;
    };
    const SigninBtn = () => {
        if ( props.is_logged !== undefined && !props.is_logged) {
            return (
                <li className="nav-item">
                    <Link to="/signup">Signup</Link>
                </li>
            )
        }
        return null;
    };
    const LogoutBtn = () => {
        if (props.is_logged) {
            return (
                <li className="nav-item" onClick={logout}>
                    <Link to="/logout">Logout</Link>
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
                <LoginBtn/>
                <SigninBtn/>
                <AdminBtn/>
                <LogoutBtn/>
            </ul>
        </div>
    );
};

const mapStateToProps = state => state.root.auth;

const NavbarContainer = connect(
    mapStateToProps
)(Navbar);

export default NavbarContainer;