import React from 'react';
import a from './ProfileCom/ProfileCom.module.css';
import Myposts from "./ProfileCom/My posts/MyPosts";

const ProfileCom = () => {
    return (
        <div className={a.content}>
            <div>
                <img className="main-pictures"
                     src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"/>
            </div>
            <div className={a.item}>ava+description</div>
            <Myposts/>

        </div>);
}
export default ProfileCom;