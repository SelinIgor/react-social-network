import React from 'react';
import a from './ProfileCom.module.css';
import Myposts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileCom = () => {
    return (
        <div className={a.content}>
            <ProfileInfo/>
            <Myposts/>

        </div>);
}
export default ProfileCom;
