import React from 'react';
import s from './Masseges.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MassegeItem/MassegeItem";
import {Field, reduxForm} from "redux-form";
import {Element} from "../FormsControls/FormsControls";
const Textarea = Element("textarea");
const maxLength = (max) =>
    (value)=> {
        if(value && value.length > max) return `Must be ${max} characters or less`
        return undefined}
const maxLength50 = maxLength(50)
const Masseges = (props)=> {
    let addNewMassage = (values) =>{
    props.sendSms(values.newMassegeBody);
    };
    let MassegesElements = props.dialogsPage.masseges.map((massege)=> <MessageItem text={massege.text}/>) ;
    let DislogsElemets = props.dialogsPage.dialogs.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id} kartinka={dialog.kartinka}/> );
    return (<div className={s["mainMasseges"]}>
        <div className={s["dialogsItem"]}>
            {DislogsElemets}
        </div>
        <div className={s.dialogs}>
            {MassegesElements}
            <div className={s.inputMassage}>
     <AddReduxMassage onSubmit={addNewMassage} />
            </div>
        </div>
        </div>
        );
        }
const AddMassage =(props)=>{
    return(       <form onSubmit={props.handleSubmit}>
        <Field className={s.textarea} component={Textarea} validate={[maxLength50]} name={"newMassegeBody"} />
        <div>
            <button type="submit" className={s.shareButton}> Send</button>

        </div>
    </form>)
}
        const AddReduxMassage = reduxForm({form:"addMassage"})(AddMassage)

        export default Masseges;
