import React, {createRef} from 'react';

import {changeNewSmsTextActionCreator, sendSmsActionCreator} from "../../redux/dialogsReducer";
import Masseges from "./Masseges";




const MassegesContainer = (props)=> {
    let SendSms = () =>{
    props.store.dispatch(sendSmsActionCreator());

    };
    let OnSmsChange= (edsms) =>{
   props.store.dispatch(changeNewSmsTextActionCreator(edsms));
    }
    return (<Masseges  sendSms={SendSms} changeNewSmsText={OnSmsChange}
                       dialogsPage={props.store.getState().MassagePage}
                                newTextSms={props.store.getState().MassagePage.newSmsText}/>);
        }
        export default MassegesContainer;
