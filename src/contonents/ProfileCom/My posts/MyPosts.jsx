import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
let NewPostElement = React.createRef();
let addingPost = ()=>{
props.dispatch({type:"ADD-POST" });
}


   let PostElements = props.postData.map((post)=><Post massege={post.massege} kartinka={post.kartinka} likes={post.likes}/>);
    let onPostChange = () =>{
        let edtext = NewPostElement.current.value;
        props.dispatch({type:"CHANGE-NEW-POST-TEXT", NewText:edtext});
    };

   return (
        <div>
            My posts

            <div>
               <div>
       <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
               </div>
                <div>
                <button onClick={addingPost}> Share</button>
                </div>
            </div>
            <div className={a.posts}>
                {PostElements}

            </div>

        </div>);
}
export default Myposts;
