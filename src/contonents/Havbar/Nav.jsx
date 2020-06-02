import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = ()=> {
    return (<div className={s.Nav}>
        <ul>
            <li className={s.item}>
                <NavLink to="/ProfileCom" className={s.nav}  activeClassName={s.active}>Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/Masseges"  className={s.nav} activeClassName={s.active} >Massages</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/music"  className={s.nav} activeClassName={s.active} >Music</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/setting"  className={s.nav} activeClassName={s.active}> Setting</NavLink>
            </li>
            <li className={`${s.item} ${s.exit}`}><NavLink to="/exit" activeClassName={s.active} className={s.nav}> Exit</NavLink></li>
        </ul></div>);}
        export default Nav;
