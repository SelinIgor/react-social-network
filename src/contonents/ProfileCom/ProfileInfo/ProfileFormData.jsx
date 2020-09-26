import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../FormsControls/FormsControls";
import styles from "../../FormsControls/FormsControls.module.css";
import {required} from "../../../validators/validators";
const Input = Element("input")
const ProfileDataForm = (props)=> {

    return(
        <form onSubmit={props.handleSubmit}>
            {(props.error)?<div className={styles.spanError}>{props.error}</div>:undefined}
           <div> <button type={"submit"}>save</button></div>
            About me: <Field type="text" name="aboutMe" placeholder="" component={Input} validate={required} />
            Your fullname <Field type="text" name="fullName" placeholder="" component={Input} />
           Are you looking for a job? <Field type="checkbox" name="lookingForAJob" placeholder="" component={Input} />
          Please tell us about your skills  <Field type="text" name="lookingForAJobDescription" placeholder="" component={Input} />
          You in social networks
            {Object.entries(props.profile.contacts).map(([key,value])=>{
                return <Field type="text" name={'contacts.'+key} placeholder={key} component={Input} />
            })

            }



    </form>)
}
const ProfileDataFormRedux = reduxForm(
    {form:"profileData"}
    )(ProfileDataForm);
export default ProfileDataFormRedux;