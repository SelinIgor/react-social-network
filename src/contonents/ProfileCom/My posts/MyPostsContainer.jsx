import React from 'react';
import {addLikeAC, addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.ProfilePage.postData,
        newPostText: state.ProfilePage.newPostText,
        buttonDef: state.ProfilePage.buttonDef,
        profile: state.ProfilePage.profile
    }
}
const MyPostsContainer = connect(mapStateToProps,{addPost:addPostActionCreator, addLike:addLikeAC})(MyPosts);

export default MyPostsContainer;
