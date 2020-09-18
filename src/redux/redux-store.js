import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers(
    {ProfilePage:profileReducer,
             MassagePage:dialogsReducer,
             UsersPage: usersReducer,
             auth:authReducer,
             form: formReducer,
             appCommon: appReducer
    }
    );
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;