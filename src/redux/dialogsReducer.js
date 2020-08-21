
const ADD_SMS = "ADD_SMS";
let InitialState ={
    masseges :[{text:'Hi there'},{text:'What Am I doing wrong?'},{text:'Nothing. Cant get it'},{text:'Okey'}],
    dialogs :[{name:"Igor", id:1, kartinka:"https://i.pinimg.com/736x/c9/eb/dd/c9ebddca44e1b308c672e641af252be5.jpg"},
        {name:"Nestor", id:2,kartinka:"https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
        {name:"Marta" ,id:3,kartinka:"https://hahadu.ru/wp-content/uploads/2019/07/3-20.jpg"},
        {name:"Oleg", id:4,kartinka:"https://focus.ua/storage/pub/images/2017/2615387.jpg"}]

}

let dialogsReducer=(state = InitialState,action)=>{
switch (action.type) {
    case ADD_SMS: {
        let stateCopy = {...state,
            masseges:[...state.masseges]};

        let NewSms = {
            text: action.newMassage
        };
        stateCopy.masseges.push(NewSms);
        return stateCopy;
    }
    default: return state;
}


}


export let sendSmsActionCreator=(newMassage)=>{
    return{type: ADD_SMS, newMassage}
};

export default dialogsReducer;

