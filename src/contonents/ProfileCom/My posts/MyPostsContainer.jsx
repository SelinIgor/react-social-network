import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profileReducer";
import Myposts from "./MyPosts";



const MyPostsContainer = (props) => {
let addingPost = ()=>{


props.store.dispatch(addPostActionCreator());

}


    let state = props.store.getState();


 let onPostChange = (edtext) =>{
        let action = changeNewPostTextActionCreator(edtext);
        props.store.dispatch(action);
    };
   return    ( <Myposts store={props.store} changeNewPostText={onPostChange} addPost={addingPost}
                        postData={state.ProfilePage.postData} newPostText={state.ProfilePage.newPostText}/>)
   }
export default MyPostsContainer;
