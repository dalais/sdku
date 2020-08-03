import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

import Home from "../_parts/Home";
import Signup from "../_parts/Signup";
import Login from "../_parts/Login";
import Admin from "../_parts/Admin";
import '../../css/layout/MainContent.css';
import NotFound from "../errors/NotFound";
import Greeting from "../_parts/Greeting";

const MainContent = () => {
    const user = useSelector(state => state.auth);
    return (
        <div className="App-content">
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path="/signup" render={() => (
                    user.is_logged ? (<Redirect to="/"/>) : (<Signup/>)
                )}/>
                <Route path="/login" render={() => (
                    user.is_logged ? (<Redirect to="/"/>) : (<Login/>)
                )}/>
                <Route path="/admin" render={() => {
                    if (user.is_logged) {
                        return <Admin/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }}/>
                <Route path="/logout" render={() => (
                    (<Redirect to="/"/>)
                )}/>
                <Route path="/greeting" render={() => (
                    <Greeting/>
                )}/>
                <Route path={"/not-found"} component={NotFound}/>
            </Switch>
        </div>
    );
};

export default MainContent;