import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT ="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING ="TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS= "FOLLOWING_IN_PROGRESS";
type InitialType ={
    users: Array <Object>
    pageSize: number,
    totalUsersCount: number,
    currentPage:number,
    portionSize:number,
    isFetching : boolean,
    followProgress: Array <Object>
}
let InitialState:InitialType ={
users:[],
pageSize: 5,
totalUsersCount: 60,
currentPage:1,
    portionSize:10,
isFetching : false,
followProgress: []

};


let usersReducer=(state = InitialState,action:any):InitialType=> {
    switch (action.type) {
        case FOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    // @ts-ignore
                    if(u.id===action.usersId){
                        // @ts-ignore
                        u={...u, followed: true}
                    }
                    return u;
                })

            }
        }
        case UNFOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    // @ts-ignore
                    if(u.id===action.usersId){
                        // @ts-ignore
                        u={...u, followed: false}
                    }
                    return u;
                })

            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case FOLLOWING_IN_PROGRESS:{
            return {
                ...state,
                followProgress: action.isFetching?
                    [...state.followProgress, action.userId]
                    :  state.followProgress.filter(id=> id !== action.userId)


            }
        }

        default:
            return state;

    }
}
type followType= {
    type: typeof FOLLOW
    usersId: number
}
export const followS=(usersId:number):followType=>{
    return{type: FOLLOW, usersId}

}
type unfollowType= {
    type: typeof UNFOLLOW
    usersId: number
}
export const unfollowS=(usersId:number):unfollowType=>{
    return{type: UNFOLLOW, usersId}
}
type setUsersType =(users:any)=> {
    type: typeof SET_USERS
    users: Array<Object>
}
export const setUsers:setUsersType=(users:Array<Object>)=>{
    return{type: SET_USERS,users}
}
type setCurrentPageType =(users:any)=> {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage:setCurrentPageType=(currentPage:number)=>{
    return{type: SET_CURRENT_PAGE, currentPage}
}
type setTotalUsersCountType =(totalUsersCount: number)=> {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount:setTotalUsersCountType=(totalUsersCount)=>{
    return{type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}
type setToggleFetchingType =(isFetching:boolean)=> {
    type: typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
export const setToggleFetching:setToggleFetchingType=(isFetching:boolean)=>{
    return{type: TOGGLE_IS_FETCHING, isFetching}
}
type followingInProgressType =(isFetching:boolean,userId:number)=> {
    type: typeof FOLLOWING_IN_PROGRESS
    isFetching:boolean,
    userId: number
}
export const followingInProgress:followingInProgressType=(isFetching, userId)=>{
    return{type: FOLLOWING_IN_PROGRESS, isFetching, userId}
}
export const getUsers = (currentPage:number,pageSize:number) => {
    return (dispatch:any) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setToggleFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data: { items: any; totalCount: any; }) => {
            dispatch(setToggleFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (userId:number) =>{
    return(dispatch:any) =>{
        dispatch(followingInProgress(true,userId));
        usersAPI.follow(userId)
            .then((response: { data: { resultCode: number; }; }) => {
                if(response.data.resultCode===0){
                    dispatch(followS(userId));
                }
                dispatch(followingInProgress(false,userId));
            });
    }
}

export const unfollow = (userId:number) =>{
    return(dispatch:any) =>{
        dispatch(followingInProgress(true,userId));
        usersAPI.unfollow(userId)
            .then((response: { data: { resultCode: number; }; }) => {
                if(response.data.resultCode===0){
                    dispatch(unfollowS(userId));
                }
                dispatch(followingInProgress(false,userId));
            });
    }
}


export default usersReducer;