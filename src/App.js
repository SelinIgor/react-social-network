import React from 'react';
import './App.css';
import Nav from "./contonents/Havbar/Nav";
import  {BrowserRouter, Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import  {withRouter} from "react-router-dom";
import Music from "./contonents/Music/Music";
import MassegesContainer from "./contonents/Masseges/MassegesContainer";
import UsersContainer from "./contonents/Users/UsersContainer";
import ProfileComContainer from "./contonents/ProfileCom/ProfileComContainer";
import HeaderContainer from "./contonents/Header/HeaderContainer";
import LoginPage from "./contonents/login/Loginpage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./contonents/common/Preloader/Preloader";
import store from "./redux/redux-store";
import Footer from "./contonents/Footer/Footer";
import Setting from "./contonents/Setting/Setting";


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
                    <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileComContainer/>}/>
                    <Route path='/messages' render={() => <MassegesContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                    <Route path='/setting' render={()=><Setting/>}/>
                </div>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps =(state)=>({
    initialized: state.appCommon.initialized,
})

const AppContainer = compose(
    withRouter,
connect(mapStateToProps,{initializeApp})) (App);
const MainApp = ()=>{
    return(<BrowserRouter>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
              integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
              crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Notable&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <Provider store={store}>
            <AppContainer/>
        </Provider> </BrowserRouter>)
}
export default MainApp