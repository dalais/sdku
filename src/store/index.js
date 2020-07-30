import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createEncryptor from 'redux-persist-transform-encrypt';

import authReducer from "./auth/reducers";

const composeEnhancers = !process.env.NODE_ENV === 'production'
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const encryptor = createEncryptor({
    secretKey: process.env.REACT_APP_KEY,
    onError: function(error) {
        console.log(error)
    }
});

const persistConfig = {
    key: 'root',
    storage: storage,
    transforms: [encryptor]
};

const rootReducer = combineReducers({
    root: authReducer
});

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

let store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store