import React from 'react';
import './App.css';

import Header from "./contonents/Header";
import Nav from "./contonents/Nav";
import ProfileCom from "./contonents/ProfileCom";

const App = ()=> {
  return (
    <div className="app-wrapper" >
            <Header/>
            <Nav/>
            <ProfileCom/>
    </div>

  );
}


export default App;
