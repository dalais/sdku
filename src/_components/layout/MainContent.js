import React from "react";
import { Provider } from "react-redux";

import Counter from "../Counter";
import store from "../../_store";
import '../../css/layout/MainContent.css';

const MainContent = () => {
    return (
        <div className="App-content">
            Content
            <Provider store={store}>
                <Counter/>
            </Provider>
        </div>
    );
};

export default MainContent;