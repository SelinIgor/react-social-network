import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, addSms, changeNewPostText, changeNewSmsText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
export let RerenderEntireTree = (state)=> {
    ReactDOM.render(<BrowserRouter><App state={state}
                                        addPost={addPost} changeNewPostText={changeNewPostText} addSms={addSms} changeNewSmsText={changeNewSmsText}/></BrowserRouter>, document.getElementById('root')
    );
};