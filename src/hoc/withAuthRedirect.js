import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state)=>{
    return {
        isAuth: state.auth.isAuth
    }
}

let withAuthRedirect = (Component)=>{
    let RedirectComponent =(props)=>{
        if(!props.isAuth) return <Redirect to='/login'/>
    return(<Component {...props}/>)
    }
    const connectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return connectedRedirectComponent;

}
export default withAuthRedirect;