
import store from "./redux/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
let RerenderEntireTree = (state)=> {
    ReactDOM.render(<BrowserRouter><App store={store}
                                        state={store.getState()}
                                        dispatch={store.dispatch.bind(store)} /></BrowserRouter>, document.getElementById('root')
    );
};
//Думаю аппе компонента може знати про стор)
RerenderEntireTree(store.getState);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
store.subscribe(()=>{
    let state = store.getState();
    RerenderEntireTree(state);
});