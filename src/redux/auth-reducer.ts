import {authAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = `GET_CAPTCHA_URL`;

 type InitialStateType ={

    data: {
        id: number | null
        email: string | null
        login: string | null
        isAuth:boolean
        captchaUrl: string | null
    }
};
let InitialState:InitialStateType ={
    data: {
        id: null,
        email: null,
        login: null,
        isAuth:false,
        captchaUrl: null
    }
};

let authReducer =(state = InitialState,action:any):InitialStateType=> {
    switch (action.type) {
        case SET_USER_DATA:{
            return  {...state,
               ...action.data
            };
        }
        case GET_CAPTCHA_URL:{

            return {
                ...state,
               ...action.captchaUrl

            }

        }
        default: return state;
    }

};
export let setUserAuthData = (id:number|null, email:string|null, login:string|null, isAuth:boolean|null)=>{
    return{
        type:SET_USER_DATA,
        data:{ id,email,login,isAuth}
    }
};
export const getUserAuthData = () =>
     (dispatch:any)=>{
         return authAPI.authme().then((response: { data: { resultCode: number; data: { id: any; email: any; login: any; }; }; }) => {
            if(response.data.resultCode===0) {
                let {id,email,login} = response.data.data;
                dispatch(setUserAuthData(id,email,login,true));
            }
        });

};
export const login = (email:string,password:string,rememberMe:boolean,captcha:any) =>{

    return (dispatch:any)=>{
        authAPI.login(email,password,rememberMe,captcha).then((response: { data: { resultCode: number; messages: string | any[]; }; }) => {
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
export const setCaptchaSuccess = (captchaUrl:any)=>{
    return{
        type:GET_CAPTCHA_URL,
        captchaUrl
    }
};
export const getCaptchaUrl = ()=>{
    return (dispatch:any)=>{
        SecurityAPI.getCaptcha().then((response: { data: { url: any; }; }) =>{
            debugger
            const captchaUrl = response.data.url;
            dispatch(setCaptchaSuccess(captchaUrl))
        })

    }
}
export const logout = () =>{
    return (dispatch:any)=>{
        authAPI.logout().then((response: { data: { resultCode: number; }; }) => {
            if(response.data.resultCode===0) {
                dispatch(setUserAuthData(null,null,null,false));
            }
        });
    }
};

export default authReducer;

