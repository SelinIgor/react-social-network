import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profileReducer";
import Myposts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
   return {
       postData: state.ProfilePage.postData,
       newPostText:state.ProfilePage.newPostText
   }
}
const mapDispatchToProps = (dispatch) =>{
   return {
       changeNewPostText:(edtext)=>{
           let action = changeNewPostTextActionCreator(edtext);
          dispatch(action)},
       addPost:()=>{
         dispatch(addPostActionCreator());
       }
   }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);



export default MyPostsContainer;
