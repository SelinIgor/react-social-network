import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

import {Element} from '../../FormsControls/FormsControls';
const Textarea = Element('textarea')

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength30 = maxLength(30);

const MyPosts = (props) => {
    let addingPost = (value) => {
        props.addPost(value.newPostText);
    };
    return (

        <div className={a.container}>
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
                    profile={props.profile}
                />
            </div>
        </div>);
}

let AddPost = (props)=>{

    return(<form onSubmit={props.handleSubmit}>
            <Field validate={[ maxLength30]} name={"newPostText"} component={Textarea}  className={a.textarea}/>
            <button type={"submit"} className={a.shareButton}>Submit </button>
    </form>)
};
let AddPostRedux = reduxForm({form:"addPost"})(AddPost);

export default MyPosts;
