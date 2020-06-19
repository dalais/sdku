import React from 'react';

import Header from "./../layout/Header";
import Footer from "./../layout/Footer";
import MainContent from "./../layout/MainContent";
import _signup from "../_parts/_signup";

const Signup = () => {

    return (
        <div className="App">
            <Header/>
            <MainContent inner={_signup}/>
            <Footer/>
        </div>
    );
};

export default Signup;
