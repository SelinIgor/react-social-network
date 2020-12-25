import React from 'react';
import {addLikeAC, AppPostNReset} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state:any) => {
    return {
        postData: state.ProfilePage.postData,
        newPostText: state.ProfilePage.newPostText,
        buttonDef: state.ProfilePage.buttonDef,
        profile: state.ProfilePage.profile
    }
}
const MyPostsContainer = connect(mapStateToProps,{AppPostNReset, addLike:addLikeAC})(MyPosts);

export default MyPostsContainer;
