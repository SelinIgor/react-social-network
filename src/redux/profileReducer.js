import {ProfileAPI, usersAPI} from "../api/api";
const ADD_POST = 'ADD_POST';
const ADD_LIKE ="ADD_LIKE";

const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_PROFILE_STATUS='SET_PROFILE_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO'
let InitialState ={
   profile: null,
    status:null,
    postData :[{massege:'Hello, sabaki! Ya naruto uzumaki', kartinka:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', likes:201, id:1,liked:false},
        {massege:'I wanna end me' ,kartinka:'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP1464-CUSA07669_00-AV00000000000005/1586331489000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' ,likes:15,id:2,liked: false},
        {massege:'Whats wrong with you?' ,kartinka:"https://i.pinimg.com/originals/a9/d0/96/a9d096ac9430a4f297ed99d42861ae9d.jpg" ,likes:64,id:3,liked:false}],
    buttonDef: "like"
}


let profileReducer=(state = InitialState,action)=> {
    switch (action.type) {
        case ADD_POST:
        {
            let NewPost = {
                massege: action.newPostText,
                kartinka: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
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
export default profileReducer;