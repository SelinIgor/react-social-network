import React from 'react';
import {connect} from "react-redux";
import {

} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {Unfollow} from "../../redux/usersReducer";
import {setUsers} from "../../redux/usersReducer";
import {setCurrentPage} from "../../redux/usersReducer";
import {setTotalUsersCount} from "../../redux/usersReducer";
import {setToggleFetching} from "../../redux/usersReducer";
import {followingInProgress} from "../../redux/usersReducer";
import {Follow} from "../../redux/usersReducer";
import {follow} from "../../redux/usersReducer";
import {unfollow} from "../../redux/usersReducer";



class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.setToggleFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.setToggleFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onClickChanged = (p) =>{
        this.props.setCurrentPage(p);
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleFetching(false);
            this.props.setUsers(response.data.items)
        });

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


export default connect(mapStateToProps,{follow, unfollow,setUsers,setCurrentPage,setTotalUsersCount,setToggleFetching,followingInProgress})(UsersContainer);


