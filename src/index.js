import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import todoApp from "./reducers/reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

let store = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

