import React from 'react';
import {addLikeAC, addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profileReducer";
import Myposts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
   return {
       postData: state.ProfilePage.postData,
       newPostText:state.ProfilePage.newPostText,
       buttonDef:state.ProfilePage.buttonDef
   }
}
const mapDispatchToProps = (dispatch) =>{
   return {
       changeNewPostText:(edtext)=>{
           let action = changeNewPostTextActionCreator(edtext);
          dispatch(action)},
       addPost:()=>{
         dispatch(addPostActionCreator());
       },
       addLike:(postId)=>{
          dispatch(addLikeAC(postId))
       }
   }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);



export default MyPostsContainer;
