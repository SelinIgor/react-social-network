import React, {createRef} from 'react';

import {changeNewSmsTextActionCreator, sendSmsActionCreator} from "../../redux/dialogsReducer";
import Masseges from "./Masseges";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) =>{
    return {
        dialogsPage:state.MassagePage,
        newTextSms:state.MassagePage.newSmsText,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        sendSms:()=>{dispatch(sendSmsActionCreator())},
        changeNewSmsText:(edsms)=>{dispatch(changeNewSmsTextActionCreator(edsms))}

    }
}

let AuthRedirectComponent = withAuthRedirect(Masseges)


        const MassegesContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

        export default MassegesContainer;
