
const ADD_SMS = "ADD_SMS";
const CHANGE_NEW_SMS_TEXT = "CHANGE_NEW_SMS_TEXT";

let dialogsReducer=(state,action)=>{
switch (action.type) {
    case ADD_SMS: {
        let NewSms = {
            text: state.newSmsText
        };
        state.masseges.push(NewSms);
        state.newSmsText = '';
        return state;
    }
    case CHANGE_NEW_SMS_TEXT:{
        state.newSmsText = action.NewText;
        return state;
    }
    default: return state;
}


}


export let sendSmsActionCreator=()=>{
    return{type: ADD_SMS}
};
export let changeNewSmsTextActionCreator=(edsms)=>{
    return{type: CHANGE_NEW_SMS_TEXT, NewText:edsms}
}

export default dialogsReducer;

