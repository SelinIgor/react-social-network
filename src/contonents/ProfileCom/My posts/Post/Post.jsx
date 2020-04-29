import React from 'react';
import a from './Post.module.css';

const  Post= (props) => {
    return ( <div className={a.item}>
            <img src={props.kartinka}/>
            {props.massege}
            <div>
            <span>
                dislikes =  {props.likes}
            </span>
            </div>
    </div>
         );
}
export default Post;