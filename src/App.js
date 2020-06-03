import React from 'react';
import './App.css';

import Header from "./contonents/Header/Header";
import Nav from "./contonents/Havbar/Nav";
import ProfileCom from "./contonents/ProfileCom/ProfileCom";
import {Route} from "react-router-dom";
import Music from "./contonents/Music/Music";
import MassegesContainer from "./contonents/Masseges/MassegesContainer";


const App = (props)=> {
    return (
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/masseges' render={()=><MassegesContainer/>}/>
                    <Route path="/profileCom" render={()=><ProfileCom store={props.store} />}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
    );
};


export default App;
