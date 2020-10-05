import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDataForm from "./ProfileFormData";
const ProfileInfo =(props)=> {
    const [editMode,setEditMode]= useState(false)
    debugger;
    if (!props.profile) {
        return <Preloader/>
    }

    function onPhotoSelected(e) {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const Contact = ({contactTitle, contactValue})=>{
        return<div> {contactTitle}:{contactValue}</div>
    }

    const onSubmit = (profileData)=>{
        props.updateProfile(profileData)
        setEditMode(false)
    }

    const ProfileData = (props) =>{
        return(    <div>
            <p> About user: {props.profile.aboutMe} </p>
            <p> Looking for a job: {props.profile.lookingForAJob===true?<span>yes</span>: <span>no</span>} </p>
            <div>Description:{props.profile.lookingForAJobDescription===null?<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis dolorum est eum ex inventore, ipsa laudantium minus nemo tempora.</p>:props.profile.lookingForAJobDescription}</div>
            <div>

                <p>Contacts:</p>
                {  Object.entries(props.profile.contacts).map(([key,value])=>{
                    return <Contact contactTitle={key} contactValue={value} key={key}/>
                })

                }

            </div>{/*./Contacts*/}

        </div>)
    }

    function onClick() {
        return    setEditMode(true)
    }

    return(
        <div >
<div className={s.container}>
<div className={s.box}>
        <div className={s.background}>
            {props.profile.photos.small==null?   <img src={"https://i.pinimg.com/originals/a9/d0/96/a9d096ac9430a4f297ed99d42861ae9d.jpg"} className={s.avatar}/>:  <img src={props.profile.photos.small } className={s.avatar}/>}
            <div>  {!props.isOwner || props.isOwner===props.authorizedUserID? <input type={"file"} onChange={onPhotoSelected}/>:<></>}</div>
            <div className={s.userName}>{props.profile.fullName}</div>
        </div>

    <div>
       <ProfileStatus updateStatus={props.updateStatus}  status={props.status}/>
    </div>
    {editMode?<ProfileDataForm profile={props.profile} onSubmit={onSubmit}/>:<div><ProfileData profile={props.profile}/><button onClick={onClick}>edit</button></div>}

</div>

        </div>

    </div>);
}
export default ProfileInfo;
