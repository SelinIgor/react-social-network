const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

let InitialState ={
    postData :[{massege:'Hello, sabaki! Ya naruto uzumaki', kartinka:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', likes:201},
        {massege:'I wanna end me' ,kartinka:'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP1464-CUSA07669_00-AV00000000000005/1586331489000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' ,likes:15},
        {massege:'Whats wrong with you?' ,kartinka:"https://i.pinimg.com/originals/a9/d0/96/a9d096ac9430a4f297ed99d42861ae9d.jpg" ,likes:64}],
    newPostText:'I think...'
}


let profileReducer=(state = InitialState,action)=> {
    switch (action.type) {
        case CHANGE_NEW_POST_TEXT:
        {
           return  {...state,
                newPostText: action.NewText};
        }
        case ADD_POST:
        {
            let NewPost = {
                massege: state.newPostText,
                kartinka: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
                likes: 12
            };
            return  {...state,
                newPostText:'',
                postData:[...state.postData,NewPost],
            };
        }
        default: return state;

    }


}

export const addPostActionCreator=()=>{
    return{type: ADD_POST}

}
export const changeNewPostTextActionCreator=(edtext)=>{
    return{type: CHANGE_NEW_POST_TEXT,NewText:edtext}
}


export default profileReducer;