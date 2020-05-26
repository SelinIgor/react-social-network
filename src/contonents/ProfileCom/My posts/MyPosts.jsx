import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profileReducer";



const Myposts = (props) => {
let NewPostElement = React.createRef();
let addingPost = ()=>{
props.dispatch(addPostActionCreator());

}


   let PostElements = props.postData.map((post)=><Post massege={post.massege} kartinka={post.kartinka} likes={post.likes}/>);
    let onPostChange = () =>{
        let edtext = NewPostElement.current.value;
        props.dispatch(changeNewPostTextActionCreator(edtext));
    };

   return (
        <div className={a.MainConteiner}>
            <div className={a.newPost}>
        <div>
            My posts
        </div>
            <div>
               <div>
       <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
               </div>
                <div>
                <button onClick={addingPost}> Share</button>
                </div>

                </div>
            </div>
            <div className={a.posts}>
                {PostElements}


            </div>
        </div>);
}
export default Myposts;
