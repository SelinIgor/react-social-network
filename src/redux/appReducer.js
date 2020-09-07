import {getUserAuthData} from "./auth-reducer";
const INITIALIZE_DONE = 'INITIALIZE_DONE';

let InitialState ={
    initialized:false
};

let appReducer =(state = InitialState,action)=> {
    switch (action.type) {
        case INITIALIZE_DONE:{
            return  {...state,
                initialized:true
            };
        }
        default: return state;
    }
};
export let initialize = ()=>{
    return{
        type:INITIALIZE_DONE
    }
};
export const initializeApp = () => (dispatch)=>{
const promise = dispatch(getUserAuthData());
//const promiseTheme = dispatch(getTheme());
Promise.all([promise]).then(()=>{
    dispatch(initialize())
})
    }


export default appReducer;

