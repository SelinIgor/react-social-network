import React from 'react';

import {changeNewSmsTextActionCreator, sendSmsActionCreator} from "../../redux/dialogsReducer";
import Masseges from "./Masseges";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) =>{
    return {
        dialogsPage:state.MassagePage,
        newTextSms:state.MassagePage.newSmsText,
        //some coment
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        sendSms:()=>{dispatch(sendSmsActionCreator())},
        changeNewSmsText:(edsms)=>{dispatch(changeNewSmsTextActionCreator(edsms))}

    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)
(Masseges);
