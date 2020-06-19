import React from 'react';

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MainContent from "../layout/MainContent";
import _admin from "../_parts/_admin";
import '../../css/layout/App.css';

const Admin = () => {

    return (
        <div className="App">
            <Header/>
            <MainContent inner={_admin}/>
            <Footer/>
        </div>
    );
};

export default Admin;
