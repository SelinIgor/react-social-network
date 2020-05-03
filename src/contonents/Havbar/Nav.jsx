import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = ()=> {
    return (<div className={s.Nav}>
        <ul className={s.ul}>
            <li className={`${s.item}`}>
                <NavLink to="/ProfileCom" activeClassName={s.active}>Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/Masseges"activeClassName={s.active} >Massages</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/setting" activeClassName={s.active}> Setting</NavLink>
            </li>
            <li className={`${s.item} ${s.exit}`}><NavLink to="/exit" activeClassName={s.active}> Exit</NavLink></li>
        </ul></div>);}
        export default Nav;
