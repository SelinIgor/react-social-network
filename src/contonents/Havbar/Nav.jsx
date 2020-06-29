import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = ()=> {
    return (<div className={s.Nav}>
        <div className={s.topNav}>
            <div>
                <NavLink to="/ProfileCom" className={s.nav}  activeClassName={s.active}>Profile</NavLink>

                <NavLink to="/Masseges"  className={s.nav} activeClassName={s.active} >Massages</NavLink>

                <NavLink to="/music"  className={s.nav} activeClassName={s.active} >Music</NavLink>

                <NavLink to="/users"  className={s.nav} activeClassName={s.active}> Users</NavLink>

                <NavLink to="/setting"  className={s.nav} activeClassName={s.active}> Setting</NavLink>
            </div>
            <div>

                <NavLink to="/exit" activeClassName={s.active} className={s.nav}> Exit</NavLink>
            </div>
        </div>
        </div>);}
        export default Nav;
