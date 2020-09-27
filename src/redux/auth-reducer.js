import {authAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

;

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = `GET_CAPTCHA_URL`;
let InitialState ={
    data: {
        id: null,
        email: null,
        login: null,
        isAuth:false,
        photo: null,
        captchaUrl: null
    }
};

let authReducer =(state = InitialState,action)=> {
    switch (action.type) {
        case SET_USER_DATA:{
            return  {...state,
               ...action.data
            };
        }
        case GET_CAPTCHA_URL:{
            debugger
            return {
                ...state,
                captchaUrl: action.captchaUrl

            }

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
export const login = (email,password,rememberMe,captcha) =>{

    return (dispatch)=>{
        authAPI.login(email,password,rememberMe,captcha).then(response => {
            if(response.data.resultCode===0) {
                dispatch(getUserAuthData());
            }
            else {
                if(response.data.resultCode===10){
                    dispatch(getCaptchaUrl())
                }
                let massege = response.data.messages.length>0?response.data.messages[0]:"Some error";
                dispatch(stopSubmit("login",{_error:massege}));

            }



        });
    }
};
export const setCaptchaSuccess = (captchaUrl)=>{
    return{
        type:GET_CAPTCHA_URL,
        captchaUrl
    }
};
export const getCaptchaUrl = ()=>{
    return (dispatch)=>{
        SecurityAPI.getCaptcha().then(response =>{
            debugger
            const captchaUrl = response.data.url;
            dispatch(setCaptchaSuccess(captchaUrl))
        })

    }
}
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

