import React from 'react';
import Header from "./Header";
import {getLogin,} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getLogin();
    }
    render() {
        return(<Header {...this.props}/>)
    }
}
let mapStateToProps =(state) =>{
    return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.ProfilePage.profile
    }
}
export default  connect(mapStateToProps,{getLogin}) (HeaderContainer);
