
import store from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
let RerenderEntireTree = (state)=> {
    ReactDOM.render(<BrowserRouter><App state={store.getState()}
                                        addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)} addSms={store.addSms.bind(store)} changeNewSmsText={store.changeNewSmsText.bind(store)}/></BrowserRouter>, document.getElementById('root')
    );
};
RerenderEntireTree(store.getState());
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
store.subscribe(RerenderEntireTree);