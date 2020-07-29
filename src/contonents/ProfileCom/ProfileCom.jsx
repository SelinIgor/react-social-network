import React from 'react';
import a from './ProfileCom.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

const ProfileCom = (props) => {
    return (
        <div className={a.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

        </div>);
}
export default ProfileCom;
