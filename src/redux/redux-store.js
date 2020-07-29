import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers(
    {ProfilePage:profileReducer,
            MassagePage:dialogsReducer,
            UsersPage: usersReducer,
        auth:authReducer
    }
    );
;
let store = createStore(reducers);
window.store = store;
export default store;