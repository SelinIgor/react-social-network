const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT ="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING ="TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS= "FOLLOWING_IN_PROGRESS";

let InitialState ={
users:[],
pageSize: 5,
totalUsersCount: 30,
currentPage:1,
isFetching : false,
followProgress: []

};


let usersReducer=(state = InitialState,action)=> {
    switch (action.type) {
        case FOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id===action.usersId){
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
                    if(u.id===action.usersId){
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
                    :  state.followProgress.filter(id=> id != action.userId)


            }
        }

        default:
            return state;

    }
}

export const follow=(usersId)=>{
    return{type: FOLLOW, usersId}

}
export const unfollow=(usersId)=>{
    return{type: UNFOLLOW, usersId}
}
export const setUsers=(users)=>{
    return{type: SET_USERS,users}
}
export const setCurrentPage=(currentPage)=>{
    return{type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCount=(totalUsersCount)=>{
    return{type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export const setToggleFetching=(isFetching)=>{
    return{type: TOGGLE_IS_FETCHING, isFetching}
}
export const followingInProgress=(isFetching, userId)=>{
    return{type: FOLLOWING_IN_PROGRESS, isFetching, userId}
}
export default usersReducer;