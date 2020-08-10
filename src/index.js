import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, useSelector} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./store";
import persistor from "./store/persistor";
import {PersistGate} from 'redux-persist/integration/react'
import axios from "axios";

import './css/index.css';
import App from "./_components/App";
import authAction from "./store/rootSt/auth/actions";

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
    });
store.subscribe(() => {
    iAx.defaults.headers.common["X-CSRF-Token"] = store.getState().auth.csrf;
    iAx.defaults.headers.common["Authorization"] = "Bearer "+store.getState().auth.token;
});

const Authentication = () => {
    const auth = useSelector(state => state.auth);
    const session = auth.is_logged !== undefined;
    if (session) {
        return <App/>;
    }
    return null;
};

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Authentication/>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
