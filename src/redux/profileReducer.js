const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';


let profileReducer=(state,action)=> {
    switch (action.type) {
        case ADD_POST:
        {
            let NewPost = {
                massege: state.newPostText,
                kartinka: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
                likes: 12
            };
            state.postData.push(NewPost);
            state.newPostText = '';
            return state;
        }
        case CHANGE_NEW_POST_TEXT:
        {
            state.newPostText = action.NewText;
            return state;
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