import React from "react";
import {useSelector} from "react-redux";

import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";
import "./../css/layout/App.css";
import {iAx} from "../index";

const App = () => {
    const auth = useSelector(state => state.auth);
    let csrf =
        (auth !== null  && auth.csrf !== undefined)
            ? auth.csrf
            : '';
    let token =
        (auth !== null && auth.token !== undefined)
            ? "Bearer " + auth.token
            : '';
    iAx.defaults.headers.common["X-CSRF-Token"] = csrf;
    iAx.defaults.headers.common["Authorization"] = token;

    return (
        <div className="App">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
};

export default App;