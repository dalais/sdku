import React from "react";

import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";
import "./../css/layout/App.css"

const App = () => {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
};

export default App;