import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../FormsControls/FormsControls";
import styles from "../../FormsControls/FormsControls.module.css";
import s from './ProfileFormData.module.css'

const Input = Element("input")
const ProfileDataForm = (props)=> {

    return(
        <div className={s.container}>

        <form onSubmit={props.handleSubmit}>
            <div className={s.buttons}><div> <button className={s.btn} type={"submit"}>save</button></div>
                <div> <button onClick={props.onCancel} className={s.btn}>cancel</button></div></div>

            {(props.error)?<div className={styles.spanError}>{props.error}</div>:undefined}
            About me: <Field type="text" name="aboutMe" placeholder="" component={Input} />
            Your fullname <Field type="text" name="fullName" placeholder="" component={Input} />
            Are you looking for a job? <Field type="checkbox" name="lookingForAJob" placeholder="" component={Input} />
            Please tell us about your skills  <Field type="text" name="lookingForAJobDescription" placeholder="" component={Input} />
            You in social networks
            {Object.entries(props.profile.contacts).map(([key,value])=>{
                return <Field type="text" name={'contacts.'+key} placeholder={key} component={Input} key={key} />

            })

            }




        </form>
        </div>)
}
const ProfileDataFormRedux = reduxForm(
    {form:"profileData"}
)(ProfileDataForm);
export default ProfileDataFormRedux;