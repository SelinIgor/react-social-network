import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
    debugger;

   let PostElements = props.postData.map((post)=><Post massege={post.massege} kartinka={post.kartinka} likes={post.likes}/>);
    return (
        <div>
            My posts

            <div>
               <div>
             <textarea>

             </textarea>
               </div>
                <div>
                <button> Share</button>
                </div>
            </div>
            <div className={a.posts}>
                {PostElements}

            </div>

        </div>);
}
export default Myposts;
