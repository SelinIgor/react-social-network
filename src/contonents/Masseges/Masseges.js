import React from 'react';
import s from './Masseges.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MassegeItem/MassegeItem";




const Masseges = (props)=> {
    let MassegesElements = props.masseges.map((massege)=> <MessageItem text={massege.text}/>) ;
    let DislogsElemets = props.dialogs.map((dialog)=>{return <DialogItem name={dialog.name} id={dialog.id}/> });
    return (<div className={s["mainMasseges"]}>
        <div className={s["dialogsItem"]}>
            {DislogsElemets}
        </div>
        <div className={s.dialogs}>
            {MassegesElements}
        </div></div>
        );
        }
        export default Masseges;
