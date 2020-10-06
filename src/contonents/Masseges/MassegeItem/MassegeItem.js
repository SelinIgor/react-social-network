import React from 'react';
import s from './MassegesItem.module.css';

const MessageItem =(props)=>{
    return( <div>
        <div className={s.messagesItem}>
        {props.text}
            </div>
    </div>);
}
        export default MessageItem;
