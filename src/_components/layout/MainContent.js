import React from "react";
import {Route, Switch} from "react-router-dom";

import _home from "../_parts/_home";
import _signup from "../_parts/_signup";
import _admin from "../_parts/_admin";
import '../../css/layout/MainContent.css';

const MainContent = props => {
    return (
        <div className="App-content">
            <Switch>
                <Route exact path={"/"} component={_home}/>
                <Route path={"/signup"} component={_signup}/>
                <Route path={"/admin"} component={_admin}/>
            </Switch>
        </div>
    );
};

export default MainContent;