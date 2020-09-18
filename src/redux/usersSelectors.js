
import { createSelector } from 'reselect';

const getUsers = (state) =>{
    return (state.UsersPage.users);
};

export const getAllUsers = createSelector(getUsers,(users)=>{
    return(users)
});
export const getPageSize = (state)=>{
    return (state.UsersPage.pageSize)
};
export const getTotalUsersCount = (state)=>{
    return(state.UsersPage.totalUsersCount)
};
export const getCurrentPage = (state)=>{
    return(state.UsersPage.currentPage)
};
export const getIsFetching = (state)=>{
    return(state.UsersPage.isFetching)
};
export const getFollowProgress = (state)=>{
    return(state.UsersPage.followProgress)
};