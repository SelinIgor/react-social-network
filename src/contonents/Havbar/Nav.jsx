import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = ()=> {
    return (
        <nav className={s.Nav}>
            <div className={`${s.item}`}>
                <NavLink to="/ProfileCom" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Masseges"activeClassName={s.active} >Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" activeClassName={s.active}> Setting</NavLink>
            </div>
        </nav>);}
        export default Nav;
