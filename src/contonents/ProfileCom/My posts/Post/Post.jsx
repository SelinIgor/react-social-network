import React from 'react';
import a from './Post.module.css';

const  Post= (props) => {
    debugger;
    return (
        props.postData.map(u => <div key={u.id}>
        <div className={a.item}>
            <div className={a.container}>
            <div className={a.avatar}>
            <img src={u.kartinka}/>
            </div>
            <div>
            {u.massege}
            </div>
            </div>
            <span>
                likes =  {u.likes}<button onClick={() => {
                props.addLike(u.id)
            }}>
                {u.liked
                    ? 'dislike'
                    : 'like'
                }

                
                </button>
            </span>

    </div>
            </div>
         ));
}
export default Post;
