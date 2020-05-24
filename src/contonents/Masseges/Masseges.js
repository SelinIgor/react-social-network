import React, {createRef} from 'react';
import s from './Masseges.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MassegeItem/MassegeItem";




const Masseges = (props)=> {
    debugger;
    let NewMassage = createRef();
    let SendSms = () =>{

        props.dispatch({type:"ADD_SMS"});

    };
    let OnSmsChange= () =>{
let edsms = NewMassage.current.value;
props.dispatch({type:"CHANGE_NEW_SMS_TEXT", NewText:edsms});
    }

    let MassegesElements = props.state.masseges.map((massege)=> <MessageItem text={massege.text}/>) ;
    let DislogsElemets = props.state.dialogs.map((dialog)=>{return <DialogItem name={dialog.name} id={dialog.id} kartinka={dialog.kartinka}/> });
    return (<div className={s["mainMasseges"]}>
        <div className={s["dialogsItem"]}>
            {DislogsElemets}
        </div>
        <div className={s.dialogs}>
            {MassegesElements}
            <div className={s.inputMassage}>
                <div>
    <textarea ref={NewMassage} value={props.state.newSmsText} onChange={OnSmsChange}>

    </textarea>
                </div>
                <div>
                    <button onClick={SendSms}> Send</button>

                </div>

            </div>
        </div>

    </div>
        );
        }
        export default Masseges;
