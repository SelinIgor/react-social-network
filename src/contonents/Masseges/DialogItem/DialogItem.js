import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
const DialogItem = (props)=>{
    let path='/Masseges/' + props.id;
    return(
        <div className={s.dialogs}>
            <div className={s.photo}><img src={props.kartinka} className={s.kartinka}/></div>
            <div className={s.nameDialog}><NavLink to={path} activeClassName= {s.active} className={s.nameDialog} >{props.name}</NavLink>
            </div>
        </div>);
}
        export default DialogItem;
