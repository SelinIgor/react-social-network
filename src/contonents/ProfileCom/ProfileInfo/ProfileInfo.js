import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
const ProfileInfo =(props)=> {
if(!props.profile){
    return <Preloader/>
}
    return(
        <div >
<div className={s.conteiner}>
        <div className={s.background}>
            {props.profile.photos.small==null?   <img src={"https://i.pinimg.com/originals/a9/d0/96/a9d096ac9430a4f297ed99d42861ae9d.jpg"} className={s.avatar}/>:  <img src={props.profile.photos.small } className={s.avatar}/>}
            <div className={s.userName}>{props.profile.fullName}</div>
        </div>

    <div>
       <ProfileStatus updateStatus={props.updateStatus}  status={props.status}/>
    </div>



    <div>Description:{props.profile.lookingForAJobDescription===null?<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis dolorum est eum ex inventore, ipsa laudantium minus nemo tempora.</p>:props.profile.lookingForAJobDescription}</div>
    <div> <p> Looking for a job: {props.profile.lookingForAJob===true?<span>yes</span>: <span>no</span>} </p>
        <div>
            <p>Contacts:</p>
        <div>
            {props.profile.contacts.github===null?<></>:props.profile.contacts.github}</div>
            <div>{props.profile.contacts.vk===null?<></>:props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.facebook===null?<></>:props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.instagram===null?<></>:props.profile.contacts.instagram}</div>
            <div>{props.profile.contacts.twitter===null?<></>:props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.website===null?<></>:props.profile.contacts.website}</div>
            <div>{props.profile.contacts.youtube===null?<></>:props.profile.contacts.youtube}</div>
            <div>{props.profile.contacts.mainLink===null?<></>:props.profile.contacts.mainLink}</div>
        </div>

    </div>
    <hr className={s.line}/>
        </div>

    </div>);
}
export default ProfileInfo;
