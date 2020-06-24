import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
let NewPostElement = React.createRef();
let addingPost = ()=>{
props.addPost();

}




    let onPostChange = () =>{
        let edtext = NewPostElement.current.value;
        props.changeNewPostText(edtext);
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
                <Post
                      postData={props.postData}
                      addLike={props.addLike}
                      buttonDef={props.buttonDef}

                />


            </div>
        </div>);
}
export default Myposts;
