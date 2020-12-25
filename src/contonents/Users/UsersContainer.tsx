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
import Paginator from "./Paginator";
import {AppStateType} from "../../redux/redux-store";

type PropsType ={
    currentPage: number
    pageSize: number
    totalUsersCount: number
    getUsers: (currentPage: number, pageSize: number)=>void
    isFetching: boolean
    users: Array<User>
    followProgress: (id:number)=>any
    follow:(id:number)=>void
    unfollow: (id:number)=>void
    followingInProgress: ()=>void
    portionSize: number
}
type User = {
    id:number
    status?: string
    name: string
    photos: Photo
    followed: boolean
}
type Photo ={
    small?: string
    large?: string
}


class UsersContainer extends React.Component<PropsType>{

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickChanged = (currentPage:number) =>{
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
                // @ts-ignore
    followingInProgress={this.props.followingInProgress}
    followProgress={this.props.followProgress}
    portionSize={this.props.portionSize}
    />}
            </>
    }
}
let mapStateToProps = (state:AppStateType) =>{
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

// @ts-ignore
export default connect(mapStateToProps,{followingInProgress,getUsers,follow,unfollow})(UsersContainer);


