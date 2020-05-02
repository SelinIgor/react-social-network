import React from 'react';
import s from './../Masseges.module.css';
import {NavLink} from "react-router-dom";
const DialogItem = (props)=>{
    let path='/Masseges/' + props.id;
    return(
    <div className={`${s.dialog}` }> <NavLink to={path} activeClassName= {s.active}>{props.name}</NavLink></div>);
}
        export default DialogItem;
