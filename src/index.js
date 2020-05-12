
import state, {subscribe} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, addSms, changeNewPostText, changeNewSmsText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
let RerenderEntireTree = (state)=> {
    ReactDOM.render(<BrowserRouter><App state={state}
                                        addPost={addPost} changeNewPostText={changeNewPostText} addSms={addSms} changeNewSmsText={changeNewSmsText}/></BrowserRouter>, document.getElementById('root')
    );
};
RerenderEntireTree(state);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
subscribe(RerenderEntireTree);