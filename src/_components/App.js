import React from "react";
import { connect } from "react-redux";

import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";
import "./../css/layout/App.css"

import auth from "../redux/_reducers/auth"

const App = () => {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
};

export default connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        auth: () => {
            dispatch({type: "AUTH", payload: auth()})
        }
    })
)(App);