import {ProfileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const ADD_POST = 'ADD_POST';
const ADD_LIKE ="ADD_LIKE";
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_PROFILE_STATUS='SET_PROFILE_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO'
const picture = "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"

type postDataType = {
    massege: string
    kartinka: string| typeof picture
    likes: number
    id: number
    liked: boolean
}
type ProfileType = {
userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: Array<string>
    photos: PhotosType
}
type PhotosType = {
    small: string | null
    large: string | null
}
let InitialState ={
   profile: null,
    status:null,
    postData :[{massege:"Hi there, I'm a new user", kartinka: picture, likes:201, id:1,liked:false},
        {massege:'Have a nice day to everyone' ,  kartinka:picture ,likes:15,id:2,liked: false},
        {massege:'I want to get an awesome experience' ,kartinka:picture ,likes:64,id:3,liked:false}],
    buttonDef: "like"
}
type InitialStateType ={
    profile:  ProfileType | null,
    status: null | string
    postData: Array <postDataType>,
    buttonDef: string
}

let profileReducer=(state = InitialState,action:any):InitialStateType=> {
    switch (action.type) {
        case ADD_POST:
        {
            let NewPost = {
                massege: action.newPostText,
                kartinka: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
                likes: 0,
                id: 4,
                liked: false

            };
            return {
                ...state,
                // @ts-ignore
                postData: [...state.postData, NewPost]

            };
        }
        case ADD_LIKE:{

            return {
                ...state,
                postData: state.postData.map(u=>{
                    if(u.id===action.postId && !u.liked){
                        u={...u, likes: u.likes + 1, liked: true}
                    }
                    else if(u.id===action.postId && u.liked){
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
                // @ts-ignore
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: return state;
    }
}
type addPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator=(newPostText:string):addPostActionCreatorType=>{
    return{type: ADD_POST,newPostText}

}
type addLikeACType = {
    type: typeof ADD_LIKE
    postId: number
}
export const addLikeAC = (postId:number):addLikeACType =>{
    return{type:ADD_LIKE, postId }
}
type setUserProfileType ={
    type: typeof SET_USER_PROFILE
    profile: Array <ProfileType>
}
export const setUserProfile = (profile:Array<ProfileType>):setUserProfileType=>{
    return{type:SET_USER_PROFILE, profile}
}
export const getUserProfile = (userId:number) =>{
   return (dispatch:any)=>{
       usersAPI.setProfile(userId).then((response: { data: ProfileType[]; }) => {
          dispatch(setUserProfile(response.data));
       });
    }
}
export const setProfileStatus =(status: string)=>{
    return{type: SET_PROFILE_STATUS, status }

}
export const savePhotoSuccess = (photos:Array<PhotosType>)=>{
    return{type:SAVE_PHOTO, photos}
}
export const getProfileStatus = (userId:number) =>{
    return(dispatch:any)=>{
        ProfileAPI.getStatus(userId).then((response: { data: string; })=>{
            dispatch(setProfileStatus(response.data))
        })
    }
}
export const updateStatus =(status:string)=>{
    return(dispatch:any)=>{
        ProfileAPI.updateStatus(status).then((response: { data: { resultCode: number; }; })=>{
            if(response.data.resultCode===0){
                dispatch(setProfileStatus(status))
            }
        })
    }
}
export const savePhoto =(file:string)=> (dispatch:any)=> {
        ProfileAPI.savePhoto(file).then((response: { data: { resultCode: number; data: { photos: PhotosType[]; }; }; }) =>{
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }})

}
export const updateProfile =(profile:Array<ProfileType>)=>{
    return(dispatch:any,getState:any)=>{
        const userId = getState().auth.id
        ProfileAPI.updateProfile(profile).then((response: { data: { resultCode: number; messages: string | any[]; }; })=>{
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