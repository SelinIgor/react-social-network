import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
let InitialState ={
    data: {
        id: null,
        email: null,
        login: null,
        isAuth:false,
        photo: null
    }
};

let authReducer =(state = InitialState,action)=> {
    switch (action.type) {
        case SET_USER_DATA:{
            return  {...state,
               ...action.data
            };
        }
        default: return state;
    }
};
export let setUserAuthData = (id, email, login, isAuth)=>{
    return{
        type:SET_USER_DATA,
        data:{ id,email,login,isAuth}
    }
};
export const getUserAuthData = () =>
     (dispatch)=>{
         return authAPI.authme().then(response => {
            if(response.data.resultCode===0) {
                let {id,email,login} = response.data.data;
                dispatch(setUserAuthData(id,email,login,true));
            }
        });

};
export const login = (email,password,rememberMe) =>{

    return (dispatch)=>{
        authAPI.login(email,password,rememberMe).then(response => {
            if(response.data.resultCode===0) {
                dispatch(getUserAuthData());
            }
            else {
                let massege = (response.data.messages>0)?response.data.messages[0]:"Some error";
                dispatch(stopSubmit("login",{_error:massege}));

            }



        });
    }
};
export const logout = () =>{
    return (dispatch)=>{
        authAPI.logout().then(response => {
            if(response.data.resultCode===0) {
                dispatch(setUserAuthData(null,null,null,false));
            }
        });
    }
};

export default authReducer;

