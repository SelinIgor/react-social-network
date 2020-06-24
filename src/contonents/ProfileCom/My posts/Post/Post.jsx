import React from 'react';
import a from './Post.module.css';

const  Post= (props) => {
    return ( <div className={a.item}>
            <div className={a.container}>
            <div className={a.avatar}>
            <img src={props.kartinka}/>
            </div>
            <div>
            {props.massege}
            </div>
            </div>
            <span>
                likes =  {props.likes}<button onClick={props.likePost(props.id)}> like</button>
            </span>

    </div>
         );
}
export default Post;
