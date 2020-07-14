import React from "react";
import {connect} from "react-redux";

import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";
import "./../css/layout/App.css";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
};


const mapDispatchToProps = {
    onAuthAction: () => {
        return {
            type: 'AUTH'
        }
    },
};

export default connect(
    null,
    mapDispatchToProps
)(App);