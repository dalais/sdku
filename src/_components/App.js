import React, {Component} from "react";
import {connect} from "react-redux";

import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";
import "./../css/layout/App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);