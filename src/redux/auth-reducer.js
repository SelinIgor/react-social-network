const SET_USER_DATA = 'SET_USER_DATA';
let InitialState ={
    data: {
        id: null,
        email: null,
        login: null,
        isAuth:false,
        photo: null
    }
}

let authReducer =(state = InitialState,action)=> {

    switch (action.type) {
        case SET_USER_DATA:{
            return  {...state,
                ...action.data,
                isAuth:true
            };
        }

        default: return state;
    }
}
export let setUserData = (id,email,login)=>{
    return{
        type:SET_USER_DATA,
        data:{ id,email,login}
    }
}
export default authReducer;

