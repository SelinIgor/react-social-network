import React from 'react';
import s from './Havbar/Nav.module.css'
const Nav = ()=> {
    return (
        <nav className={s.Nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href="#">Profile</a>
            </div>
            <div className={s.item}>
                <a href="#">Massages</a>
            </div>
            <div className={s.item}>
                <a href="#">Music</a>
            </div>
            <div className={s.item}>
                <a href="#">Setting</a>
            </div>
        </nav>);}
        export default Nav;