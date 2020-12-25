
import { createSelector } from 'reselect';
import {AppStateType} from "./redux-store";

const getUsers = (state:AppStateType) =>{
    return (state.UsersPage.users);
};

export const getAllUsers = createSelector(getUsers,(users)=>{
    return(users)
});
export const getPageSize = (state:AppStateType)=>{
    return (state.UsersPage.pageSize)
};
export const getTotalUsersCount = (state:AppStateType)=>{
    return(state.UsersPage.totalUsersCount)
};
export const getCurrentPage = (state:AppStateType)=>{
    return(state.UsersPage.currentPage)
};
export const getIsFetching = (state:AppStateType)=>{
    return(state.UsersPage.isFetching)
};
export const getFollowProgress = (state:AppStateType)=>{
    return(state.UsersPage.followProgress)
};