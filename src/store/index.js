import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createEncryptor from 'redux-persist-transform-encrypt';

import authReducer from "./auth/reducers";

const isProduction = process.env.NODE_ENV === 'production';
const composeEnhancers =
    isProduction
        ? compose
        : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose);

const encryptor = createEncryptor({
    secretKey: process.env.REACT_APP_KEY,
    onError: function(error) {
        console.log(error)
    }
});

const persistConfig = {
    keyPrefix: 'sdku',
    key: '_',
    storage: storage,
    transforms: [encryptor]
};


const rootReducer = combineReducers({
    base: authReducer
});

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

let store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store