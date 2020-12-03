import {getUserAuthData} from "./auth-reducer";

const INITIALIZE_DONE = 'INITIALIZE_DONE';
type InitialType = {
    initialized: boolean
}
let InitialState:InitialType = {
    initialized: true
};

let appReducer = (state = InitialState, action: any):InitialType => {
    switch (action.type) {
        case INITIALIZE_DONE: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
};
type initializeType = {
    type: typeof INITIALIZE_DONE
}


export let initialize = ():initializeType => {
    return {
        type: INITIALIZE_DONE
    }
};
export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getUserAuthData());
    Promise.all([promise]).then(() => {
        dispatch(initialize())
    })
}


export default appReducer;

