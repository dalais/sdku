import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./store";
import axios from "axios";

import './css/index.css';
import App from "./_components/App";

let backendUrl = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    backendUrl = process.env.REACT_APP_BACKEND_DEV_HOST
} else {
    backendUrl = process.env.REACT_APP_BACKEND_HOST;
}
export const iAx = axios.create({
    baseURL: backendUrl+'/api/',
    withCredentials: true
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>>
          <Router>
              <App/>
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
