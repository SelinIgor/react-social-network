import React from 'react';
import a from './Post.module.css';

const  Post= (props) => {

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
               {u.likes} likes <button className={a.shareButton} onClick={() => {
                props.addLike(u.id)
            }}>
                {u.liked
                    ? <i className="fas fa-heart"> </i>
                    :<i className="far fa-heart"> </i>
                }

                
                </button>
            </span>

    </div>
            </div>
         ));
}
export default Post;
