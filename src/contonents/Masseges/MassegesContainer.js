import React, {createRef} from 'react';

import {changeNewSmsTextActionCreator, sendSmsActionCreator} from "../../redux/dialogsReducer";
import Masseges from "./Masseges";
import StoreContext from "../../ReactContext";




const MassegesContainer = ()=> {

    return (
        <StoreContext.Consumer>
            { (store)=>
        {
            let SendSms = () =>{
                store.dispatch(sendSmsActionCreator());

            };
            let OnSmsChange= (edsms) =>{
                store.dispatch(changeNewSmsTextActionCreator(edsms));
            }
            let state = store.getState().MassagePage;
            return <Masseges sendSms={SendSms} changeNewSmsText={OnSmsChange}
                      dialogsPage={state}
                      newTextSms={state.newSmsText}/>
        }}</StoreContext.Consumer>);
        }
        export default MassegesContainer;
