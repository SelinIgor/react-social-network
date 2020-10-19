import React from "react";
import  {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
/*import {withRouter} from "react-router-dom";*/

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authorizedUserID: state.auth.id,
    }
}

export let withAuthRedirect = (Component)=>{
    let RedirectComponent =(props)=>{
        if(!props.isAuth) return <Redirect to='/login'/>
    return(<Component {...props}/>)
    }
   return compose
   (connect(mapStateToPropsForRedirect,{}))(RedirectComponent);
}


/*
export const willShowComponent = (Component) =>{
    debugger;
    const showComponent = (props)=> {

        if (!props.match.params.userId || props.match.params.userId===props.authorizedUserID) {
            return <Component {...props}/>
        }
    }
     compose(withRouter,connect(mapStateToPropsForRedirect,{}))(showComponent)
}


*/
