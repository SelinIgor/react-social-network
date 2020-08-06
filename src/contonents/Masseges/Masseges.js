import React, {createRef} from 'react';
import s from './Masseges.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MassegeItem/MassegeItem";
import {Redirect} from "react-router-dom";

const Masseges = (props)=> {



    let NewMassage = createRef();
    let SendSms = () =>{
    props.sendSms();

    };
    let OnSmsChange= () =>{
let edsms = NewMassage.current.value;
props.changeNewSmsText(edsms);
    }
    let MassegesElements = props.dialogsPage.masseges.map((massege)=> <MessageItem text={massege.text}/>) ;
    let DislogsElemets = props.dialogsPage.dialogs.map((dialog)=>{return <DialogItem name={dialog.name} id={dialog.id} kartinka={dialog.kartinka}/> });
    return (<div className={s["mainMasseges"]}>
        <div className={s["dialogsItem"]}>
            {DislogsElemets}
        </div>
        <div className={s.dialogs}>
            {MassegesElements}
            <div className={s.inputMassage}>
                <div>
    <textarea className={s.textarea} ref={NewMassage} value={props.newTextSms} onChange={OnSmsChange}>

    </textarea>
                </div>
                <div>
                    <button onClick={SendSms} className={s.shareButton}> Send</button>

                </div>

            </div>
        </div>

    </div>
        );
        }
        export default Masseges;
