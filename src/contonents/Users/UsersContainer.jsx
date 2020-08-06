import React from 'react';
import {connect} from "react-redux";
import {} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {followingInProgress} from "../../redux/usersReducer";
import {follow} from "../../redux/usersReducer";
import {unfollow} from "../../redux/usersReducer";
import {getUsers} from "../../redux/usersReducer";

class UsersContainer extends React.Component{

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickChanged = (currentPage) =>{
        this.props.getUsers(currentPage, this.props.pageSize)

    }

    render() {
        return <> {this.props.isFetching? <Preloader/>:<></>}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onClickChanged={this.onClickChanged}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   followProgress={this.props.followProgress}
        > </Users>
            </>
    }
}
let mapStateToProps = (state) =>{
    return {
       users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage:state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followProgress:state.UsersPage.followProgress
    }
}

export default connect(mapStateToProps,{followingInProgress,getUsers, follow,unfollow})(UsersContainer);


