import React from 'react';
import {connect} from "react-redux";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {followingInProgress} from "../../redux/usersReducer";
import {follow} from "../../redux/usersReducer";
import {unfollow} from "../../redux/usersReducer";
import {getUsers} from "../../redux/usersReducer";
import {
    getCurrentPage,
    getFollowProgress,
    getIsFetching,
} from "../../redux/usersSelectors";
import Paginator from "./Pagitanor";

class UsersContainer extends React.Component{

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickChanged = (currentPage) =>{
        this.props.getUsers(currentPage, this.props.pageSize)

    }

    render() {
        return <>
        <Paginator totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onClickChanged={this.onClickChanged}
                   currentPage={this.props.currentPage}/>
            {this.props.isFetching? <Preloader/>:
            <Users
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   followProgress={this.props.followProgress}
                   portionSize={this.props.portionSize}
        > </Users>}
            </>
    }
}
let mapStateToProps = (state) =>{
    return {
       users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount:state.UsersPage.totalUsersCount,
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        followProgress:getFollowProgress(state),
        portionSize:state.UsersPage.portionSize
    }
}

export default connect(mapStateToProps,{followingInProgress,getUsers,follow,unfollow})(UsersContainer);


