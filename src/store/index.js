import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./auth/reducers";
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) : compose;

const rootReducer = combineReducers({
    auth: authReducer
});

let store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;