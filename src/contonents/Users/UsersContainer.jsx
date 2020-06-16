import React from 'react';
import {connect} from "react-redux";
import {FollowAC, setUsersAC, UnfollowAC} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) =>{
    return {
       users: state.UsersPage.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
       following:(usersId)=>{
         dispatch(FollowAC(usersId))
     },
        unfollow:(usersId)=>{
            dispatch(UnfollowAC(usersId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },

    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);



export default UsersContainer;
