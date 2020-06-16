import React, {createRef} from 'react';

import {changeNewSmsTextActionCreator, sendSmsActionCreator} from "../../redux/dialogsReducer";
import Masseges from "./Masseges";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        dialogsPage:state.MassagePage,
        newTextSms:state.MassagePage.newSmsText
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        sendSms:()=>{dispatch(sendSmsActionCreator())},
        changeNewSmsText:(edsms)=>{dispatch(changeNewSmsTextActionCreator(edsms))}

    }
}




        const MassegesContainer = connect(mapStateToProps,mapDispatchToProps)(Masseges)

        export default MassegesContainer;
