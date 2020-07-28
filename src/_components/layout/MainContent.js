import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import Home from "../_parts/Home";
import Signup from "../_parts/Signup";
import Login from "../_parts/Login";
import Admin from "../_parts/Admin";
import '../../css/layout/MainContent.css';
import NotFound from "../pages/NotFound";
import Greeting from "../_parts/Greeting";

const MainContent = props => {
    return (
        <div className="App-content">
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path="/signup" render={() => (
                    props.is_logged ? (<Redirect to="/"/>) : (<Signup/>)
                )}/>
                <Route path="/login" render={() => (
                    props.is_logged ? (<Redirect to="/"/>) : (<Login/>)
                )}/>
                <Route path="/admin" render={() => (
                    props.is_logged ? (<Admin/>) : (<Redirect to="/login"/>)
                )}/>
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

const mapStateToProps = state => state.root.auth;

export default connect(mapStateToProps)(MainContent);