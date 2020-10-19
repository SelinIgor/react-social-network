import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
   return {
       authorizedUserID: state.auth.id
   }
}


export const isOwner = (Component) => {
  const isOwnerInner = (props) =>
    {
        if (!props.match.params.userId || props.match.params.userId === props.authorizedUserID) {

            return <Component {...props}/>
        }
       return compose(connect (mapStateToProps,{}),withRouter) (isOwnerInner)
    }
}


