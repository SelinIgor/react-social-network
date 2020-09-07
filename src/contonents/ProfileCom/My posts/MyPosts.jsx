import React, {useState} from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../FormsControls/FormsControls";

const Textarea = Element("textarea");

//const required = value => (value  ? undefined : 'Required');
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
//обовязково брати перевірку наявності значення(value)
const maxLength30 = maxLength(30);

const MyPosts = React.memo((props) => {
    let addingPost = (value) => {
        props.addPost(value.newPostText);
    };
console.log("render");
    return (

        <div className={a.MainConteiner}>
            <div className={a.newPost}>
                <div className={a.myPost}>
                    My posts
                </div>
                <AddPostRedux onSubmit={addingPost}/>
            </div>
            <div className={a.posts}>
                <Post
                    postData={props.postData}
                    addLike={props.addLike}
                    buttonDef={props.buttonDef}
                />
            </div>
        </div>);
});

let AddPost = (props)=>{

    return(<form onSubmit={props.handleSubmit}>
            <Field validate={[ maxLength30]} name={"newPostText"} component={Textarea} className={a.textarea}/>
            <button type={"submit"} className={a.shareButton}>Submit </button>
    </form>)
};
let AddPostRedux = reduxForm({form:"addPost"})(AddPost);

export default MyPosts;
