const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let InitialState ={
users:[]

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
                users: [...state.users,...action.users]
            }
        }
        default:
            return state;
    }
}

export const FollowAC=(usersId)=>{
    return{type: FOLLOW, usersId}

}
export const UnfollowAC=(usersId)=>{
    return{type: UNFOLLOW, usersId}
}
export const setUsersAC=(users)=>{
    return{type: SET_USERS,users}
}

export default usersReducer;