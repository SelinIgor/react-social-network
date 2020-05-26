
const ADD_SMS = "ADD_SMS";
const CHANGE_NEW_SMS_TEXT = "CHANGE_NEW_SMS_TEXT";

let InitialState ={
    masseges :[{text:'Hi there'},{text:'What Am I doing wrong?'},{text:'Nothing. Cant get it'},{text:'Okey'}],
    dialogs :[{name:"Igor", id:1, kartinka:"https://i.pinimg.com/736x/c9/eb/dd/c9ebddca44e1b308c672e641af252be5.jpg"},
        {name:"Nestor", id:2,kartinka:"https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
        {name:"Marta" ,id:3,kartinka:"https://hahadu.ru/wp-content/uploads/2019/07/3-20.jpg"},
        {name:"Oleg", id:4,kartinka:"https://focus.ua/storage/pub/images/2017/2615387.jpg"}],
    newSmsText:'Hello'

}

let dialogsReducer=(state = InitialState,action)=>{
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

