import React from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter as Router } from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react'

import stores from '../redux/_store'

import App from "./App";

const {store, persistor} = stores();
const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App/>
            </Router>
        </PersistGate>
    </Provider>
);

export default Root;