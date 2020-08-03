import React from "react";
import {useSelector} from 'react-redux';
import {Link, useHistory} from "react-router-dom";
import '../../css/layout/Navbar.css';
import {iAx} from "../../index";
import store from "../../store";
import authAction from "../../store/rootSt/auth/actions";

const Navbar = () => {
    const user = useSelector(state => state.auth);
    const history = useHistory();

    const logout = () => {
        iAx.get('auth/logout')
            .then(res => {
                store.dispatch(authAction(res.data));
                history.push("/")
            })
    };

    const AdminBtn = () => {
        if ( user.is_logged !== undefined && user.is_logged) {
            return (
                <li className="nav-item">
                    <Link to="/admin">Admin</Link>
                </li>
            )
        }
        return null;
    };
    const LoginBtn = () => {
        if ( user.is_logged !== undefined && !user.is_logged) {
            return (
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
            )
        }
        return null;
    };
    const SigninBtn = () => {
        if (!user.is_logged) {
            return (
                <li className="nav-item">
                    <Link to="/signup">Signup</Link>
                </li>
            )
        }
        return null;
    };
    const LogoutBtn = () => {
        if (user.is_logged) {
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

export default Navbar;