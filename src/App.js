import React from 'react';
import './App.css';
import Nav from "./contonents/Havbar/Nav";
import {Route} from "react-router-dom";
import Music from "./contonents/Music/Music";
import MassegesContainer from "./contonents/Masseges/MassegesContainer";
import UsersContainer from "./contonents/Users/UsersContainer";
import ProfileComContainer from "./contonents/ProfileCom/ProfileComContainer";
import HeaderContainer from "./contonents/Header/HeaderContainer";
import Loginpage from "./contonents/login/Loginpage";


const App = ()=> {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/masseges' render={()=><MassegesContainer/>}/>
                    <Route path="/profileCom/:userId?" render={()=><ProfileComContainer/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path='/login' render={()=><Loginpage/>}/>
                </div>
            </div>
    );
};


export default App;
