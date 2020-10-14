import React from 'react';

import {sendSmsActionCreator} from "../../redux/dialogsReducer";
import Masseges from "./Masseges";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) =>{
    return {
        dialogsPage:state.MassagePage,

    }
};
const mapDispatchToProps = (dispatch) =>{
    return {
        sendSms:(newMassage)=>{dispatch(sendSmsActionCreator(newMassage))},


    }
};
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)
(Masseges);
