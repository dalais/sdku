import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./store";
import persistor from "./store/persistor";
import {PersistGate} from 'redux-persist/integration/react'
import axios from "axios";

import './css/index.css';
import App from "./_components/App";
import authAction from "./store/rootSt/auth/actions";
import MainError from "./_components/errors/MainError";

let backendUrl = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    backendUrl = process.env.REACT_APP_BACKEND_DEV_HOST
}
export const iAx = axios.create({
    baseURL: backendUrl + '/api/',
    withCredentials: true
});

iAx.post('auth/session', {})
    .then(res => {
        store.dispatch(authAction(res.data));
        return res.data;
    }).then(auth => {
    let csrf =
        (auth !== null && auth.csrf !== undefined)
            ? auth.csrf
            : '';
    let token =
        (auth !== null && auth.token !== undefined)
            ? "Bearer " + auth.token
            : '';
    iAx.defaults.headers.common["X-CSRF-Token"] = csrf;
    iAx.defaults.headers.common["Authorization"] = token;
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <App/>
                </Router>
            </PersistGate>
        </Provider>,
        document.getElementById('root')
    )
}).catch(error => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        throw new Error(error)
    }
    if (process.env.NODE_ENV === 'production') {

        ReactDOM.render(
            <MainError/>,
            document.getElementById('root')
        )
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
