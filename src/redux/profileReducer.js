import {ProfileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const ADD_POST = 'ADD_POST';
const ADD_LIKE ="ADD_LIKE";

const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_PROFILE_STATUS='SET_PROFILE_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO'
let InitialState ={
   profile: null,
    status:null,
    postData :[{massege:'Hello, sabaki! Ya naruto uzumaki', kartinka:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', likes:201, id:1,liked:false},
        {massege:'I wanna end me' ,kartinka:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' ,likes:15,id:2,liked: false},
        {massege:'Whats wrong with you?' ,kartinka:"https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" ,likes:64,id:3,liked:false}],
    buttonDef: "like"
}


let profileReducer=(state = InitialState,action)=> {
    switch (action.type) {
        case ADD_POST:
        {
            let NewPost = {
                massege: action.newPostText,
                kartinka: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
                likes: 12
            };
            return  {...state,
                postData:[...state.postData,NewPost],
            };
        }
        case ADD_LIKE:{
            return {
                ...state,
                postData: state.postData.map(u=>{
                    if(u.id===action.postId && u.liked=== false){
                        u={...u, likes: u.likes + 1, liked: true}
                    }
                    else if(u.id===action.postId && u.liked=== true){
                        u={...u, likes: u.likes - 1, liked: false}
                    }
                    return u;
                })

            }
            }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_PROFILE_STATUS:{
           return {
               ...state,
               status: action.status
           }
        }
        case SAVE_PHOTO:{
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }


        default: return state;

    }


}

export const addPostActionCreator=(newPostText)=>{
    return{type: ADD_POST,newPostText}

}
export const addLikeAC = (postId) =>{
    return{type:ADD_LIKE, postId }
}
export const setUserProfile = (profile)=>{
    return{type:SET_USER_PROFILE, profile}
}
export const getUserProfile = (userId) =>{
   return (dispatch)=>{
       usersAPI.setProfile(userId).then(response => {
          dispatch(setUserProfile(response.data));
       });
    }
}
export const setProfileStatus =(status)=>{
    return{type: SET_PROFILE_STATUS, status }

}
export const savePhotoSuccess = (photos)=>{
    return{type:SAVE_PHOTO, photos}
}
export const getProfileStatus = (userId) =>{
    return(dispatch)=>{
        ProfileAPI.getStatus(userId).then(response=>{
            dispatch(setProfileStatus(response.data))
        })
    }
}
export const updateStatus =(status)=>{
    return(dispatch)=>{
        ProfileAPI.updateStatus(status).then(response=>{
            if(response.data.resultCode===0){
                dispatch(setProfileStatus(status))
            }
        })
    }
}
export const savePhoto =(file)=> (dispatch)=> {
        ProfileAPI.savePhoto(file).then(response =>{
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }})

}
export const updateProfile =(profile)=>{
    return(dispatch,getState)=>{
        const userId = getState().auth.id
        ProfileAPI.updateProfile(profile).then(response=>{
            if(response.data.resultCode===0){
                dispatch(getUserProfile(userId))
            }
            else {
                const message = (response.data.messages.length>0)? response.data.messages[0]: "Something wrong"
                dispatch(stopSubmit("profileData",{_error:message}));
            }
        })
    }
}
export default profileReducer;