import React from 'react';
import './App.css';
import Nav from "./contonents/Havbar/Nav";
import {Route} from "react-router-dom";
import  {withRouter} from "react-router-dom";
import Music from "./contonents/Music/Music";
import MassegesContainer from "./contonents/Masseges/MassegesContainer";
import UsersContainer from "./contonents/Users/UsersContainer";
import ProfileComContainer from "./contonents/ProfileCom/ProfileComContainer";
import HeaderContainer from "./contonents/Header/HeaderContainer";
import LoginPage from "./contonents/login/Loginpage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./contonents/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/messages' render={() => <MassegesContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileComContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps =(state)=>({
    initialized: state.appCommon.initialized,
})

export default compose(
    withRouter,
connect(mapStateToProps,{initializeApp})) (App);
