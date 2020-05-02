import s from "./ProfileInfo.module.css";
import React from "react";
const ProfileInfo =()=> {
    return(<div>
    <div>
        <img className="main-pictures"
             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"/>
    </div>
        <div className={s.descriptionBlock}> ava + description </div>
    </div>);
}
export default ProfileInfo;
