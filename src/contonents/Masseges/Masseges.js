import React from 'react';
import s from './Masseges.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MassegeItem/MassegeItem";
let dialogs =[{name:"Igor", id:1},{name:"Nestor", id:2},{name:"Marta" ,id:3},{name:"Oleg", id:4}];
let masseges =[{text:'Hi there'},{text:'What Am I doing wrong?'},{text:'Nothing. Cant get it'},{text:'Okey'}];
let DislogsElemets = dialogs.map((dialog)=>{return <DialogItem name={dialog.name} id={dialog.id}/> });
let MassegesElements = masseges.map((massege)=> <MessageItem text={massege.text}/>) ;
const Masseges = ()=> {
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
