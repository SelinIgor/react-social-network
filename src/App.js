import React from 'react';
import './App.css';

import Header from "./contonents/Header/Header";
import Nav from "./contonents/Havbar/Nav";
import ProfileCom from "./contonents/ProfileCom/ProfileCom";
import Masseges from "./contonents/Masseges/Masseges";
import {Route} from "react-router-dom";
import Music from "./contonents/Music/Music";


const App = (props)=> {
    return (
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/masseges' render={()=><Masseges state={props.state.MassagePage}/>}/>
                    <Route path="/profileCom" render={()=><ProfileCom profilePage={props.state.ProfilePage}
                                                                      addPost={props.addPost}
                                                                      changeNewPostText={props.changeNewPostText} />}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
    );
};


export default App;
