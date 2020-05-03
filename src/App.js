import React from 'react';
import './App.css';

import Header from "./contonents/Header/Header";
import Nav from "./contonents/Havbar/Nav";
import ProfileCom from "./contonents/ProfileCom/ProfileCom";
import Masseges from "./contonents/Masseges/Masseges";
import {BrowserRouter,Route} from "react-router-dom"
import Music from "./contonents/Music/Music";


const App = (props)=> {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/masseges' component={Masseges}/>
                    <Route path="/profileCom" render={()=><ProfileCom postData={props.postData}/>}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
