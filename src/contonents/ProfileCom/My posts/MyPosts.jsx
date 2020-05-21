import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/state";


const Myposts = (props) => {
let NewPostElement = React.createRef();
let addingPost = ()=>{
props.dispatch(addPostActionCreator);
}


   let PostElements = props.postData.map((post)=><Post massege={post.massege} kartinka={post.kartinka} likes={post.likes}/>);
    let onPostChange = () =>{

        let edtext = NewPostElement.current.value;
        let action = changeNewPostTextActionCreator(edtext)
        props.dispatch(action);
    };

   return (
        <div>
            My posts

            <div className={a.sentArea}>
               <div>
       <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
               </div>
                <div>
                <button onClick={addingPost} className={a.styleButton}> Share</button>
                </div>
            </div>
            <div className={a.posts}>
                {PostElements}

            </div>

        </div>);
}
export default Myposts;
