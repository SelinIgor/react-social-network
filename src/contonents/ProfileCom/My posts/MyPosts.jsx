import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const Myposts = () => {
    let PostData =[{massege:'Hello, sabaki! Ya naruto uzumaki', kartinka:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', likes:201},
        {massege:'I wanna end me' ,kartinka:'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP1464-CUSA07669_00-AV00000000000005/1586331489000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' ,likes:15},
        {massege:'Whats wrong with you?' ,kartinka:"https://i.pinimg.com/originals/a9/d0/96/a9d096ac9430a4f297ed99d42861ae9d.jpg" ,likes:64}]
   let PostElements = PostData.map((post)=><Post massege={post.massege} kartinka={post.kartinka} likes={post.likes}/>);
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
                {/*<Post massege={PostData[0].massege} kartinka={PostData[0].kartinka} likes={PostData[0].likes}/>*/}
                {/*<Post massege={PostData[1].massege} kartinka={PostData[1].kartinka}likes={PostData[1].likes}/>*/}
                {/*<Post massege={PostData[2].massege} kartinka={PostData[2].kartinka}likes={PostData[2].likes}/>*/}
            </div>

        </div>);
}
export default Myposts;
