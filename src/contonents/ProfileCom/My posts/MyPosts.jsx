import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div>
            My posts

            <div>
             <textarea>

             </textarea>
                <button> Share</button>
            </div>
            <div className={a.posts}>
                <Post massege='Hello, sabaki! Ya naruto uzumaki' kartinka='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' likes="201"/>
                <Post massege='I wanna end me' kartinka='https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP1464-CUSA07669_00-AV00000000000005/1586331489000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' likes="15"/>
                <Post massege='Whats wrong with you?' kartinka="https://i.pinimg.com/originals/a9/d0/96/a9d096ac9430a4f297ed99d42861ae9d.jpg" likes="64"/>
            </div>

        </div>);
}
export default Myposts;