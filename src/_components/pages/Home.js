import React from 'react';

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MainContent from "../layout/MainContent";
import homePage from "../_parts/_home";
import '../../css/layout/App.css';

const Home = () => {

    return (
        <div className="App">
            <Header/>
            <MainContent inner={homePage}/>
            <Footer/>
        </div>
    );
};

export default Home;
