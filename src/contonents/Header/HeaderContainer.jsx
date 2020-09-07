import React from 'react';
import Header from "./Header";
import { logout,} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";

class HeaderContainer extends React.Component{
    render() {
        return(<Header {...this.props}/>)
    }
}
let mapStateToProps =(state) =>{
    return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.ProfilePage.profile,
        id: state.auth.id
    }
}
export default  connect(mapStateToProps,{logout,getUserProfile}) (HeaderContainer);
