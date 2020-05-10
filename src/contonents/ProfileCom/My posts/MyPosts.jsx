import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
let NewPostElement = React.createRef();
let addingPost = ()=>{
    debugger;
    let text = NewPostElement.current.value;
    props.addPost(text);
}


   let PostElements = props.postData.map((post)=><Post massege={post.massege} kartinka={post.kartinka} likes={post.likes}/>);
   return (
        <div>
            My posts

            <div>
               <div>
       <textarea ref={NewPostElement}></textarea>
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
