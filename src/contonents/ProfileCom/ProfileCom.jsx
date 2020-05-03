import React from 'react';
import a from './ProfileCom.module.css';
import Myposts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileCom = (props) => {

    return (
        <div className={a.content}>
            <ProfileInfo/>
            <Myposts postData={props.state.postData}/>

        </div>);
}
export default ProfileCom;
