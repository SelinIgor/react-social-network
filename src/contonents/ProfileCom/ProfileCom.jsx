import React from 'react';
import a from './ProfileCom.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

const ProfileCom = (props) => {
    debugger
    return (
        <div className={a.container}>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} authorizedUserID={props.authorizedUserID}
                         savePhoto={props.savePhoto} updateProfile={props.updateProfile} isOwner={props.isOwner}/>
            <MyPostsContainer/>

        </div>);
}
export default ProfileCom;
