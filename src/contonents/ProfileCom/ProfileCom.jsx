import React from 'react';
import a from './ProfileCom.module.css';
import Myposts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileCom = (props) => {

    return (
        <div className={a.content}>
            <ProfileInfo/>
            <Myposts
                postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>

        </div>);
}
export default ProfileCom;
