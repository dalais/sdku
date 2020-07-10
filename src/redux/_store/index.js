import {combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import createEncryptor from 'redux-persist-transform-encrypt'

import authReduser from "../_reducers/auth";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const encryptor = createEncryptor({
    secretKey: 'U2FsdGVkX18xYlzxmf9Kj/cmaMwGdBKEkL2'
});

const persistConfig = {
    key: 'root',
    storage: storage,
    transforms: [encryptor]
};

const rootReducer = combineReducers({ authReduser });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, composeEnhancers(
        applyMiddleware(thunk)
    ));
    let persistor = persistStore(store);
    return { store, persistor }
}