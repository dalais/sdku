import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import session from 'redux-persist/lib/storage/session';
import createEncryptor from 'redux-persist-transform-encrypt';

import authReducer from "./rootSt/auth/reducers";
import {localReducer} from "./localSt/example";
import {sessionReducer} from "./sessionSt/example";

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

const localPersistConfig = {
    keyPrefix: '_',
    key: 'lst',
    storage: storage,
    transforms: [encryptor]
};

const sessionPersistConfig = {
    keyPrefix: '_',
    key: 'sst',
    storage: session,
    transforms: [encryptor]
};


const rootReducer = combineReducers({
    // not persisted state
    auth: authReducer,

    // state in localStorage
    base: persistReducer(localPersistConfig, localReducer),

    // state in sessionStorage
    sst: persistReducer(sessionPersistConfig,sessionReducer),

});

let store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store