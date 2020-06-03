import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profileReducer";
import Myposts from "./MyPosts";
import StoreContext from "../../../ReactContext";



const MyPostsContainer = () => {


    return (<StoreContext.Consumer>{(store)=>{

        let addingPost = ()=>{
            store.dispatch(addPostActionCreator());
        }
        let onPostChange = (edtext) =>{
            let action = changeNewPostTextActionCreator(edtext);
           store.dispatch(action);
        };
        let state = store.getState();

        return < Myposts changeNewPostText={onPostChange} addPost={addingPost}
        postData={state.ProfilePage.postData} newPostText={state.ProfilePage.newPostText}/>}
    }</StoreContext.Consumer>)
}
export default MyPostsContainer;
