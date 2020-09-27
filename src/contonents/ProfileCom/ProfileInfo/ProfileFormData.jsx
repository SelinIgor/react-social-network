import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../FormsControls/FormsControls";
import styles from "../../FormsControls/FormsControls.module.css";
import {required} from "../../login/Loginpage";
const Input = Element("input")
const ProfileDataForm = (props)=> {
    return(
        <form onSubmit={props.handleSubmit}>
            <div> <button type={"submit"}>save</button></div>
            {(props.error)?<div className={styles.spanError}>{props.error}</div>:undefined}
            About me: <Field type="text" name="aboutMe" placeholder="" component={Input} />
            Your fullname <Field type="text" name="fullName" placeholder="" component={Input} />
            Are you looking for a job? <Field type="checkbox" name="lookingForAJob" placeholder="" component={Input} />
            Please tell us about your skills  <Field type="text" name="lookingForAJobDescription" placeholder="" component={Input} />
            You in social networks
            {Object.keys(props.profile.contacts).map(key=>{
                return <Field type="text" name={"contacts."+key} placeholder={key} component={Input} />
            })

            }



        </form>)
}
const ProfileDataFormRedux = reduxForm(
    {form:"profileData"}
)(ProfileDataForm);
export default ProfileDataFormRedux;