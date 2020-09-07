import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {


    return (


        <header className={s.Header}>
        <div className={s.headerContainer}>
            <div className={s.logoConteiner}>
                <div><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
                </div>
                <div className={s.nameLogo}>Keetouch</div>
            </div>


            <div className={s.authBlock}>
                {
                    props.isAuth ? <div className={s.nameWithExit}>
                            <div><NavLink to={`/profile/${props.id}`}> {props.login}</NavLink></div>
                            <a onClick={props.logout}>Exit</a></div>
                        : <NavLink  to={"/login"}>Login</NavLink>
                }

            </div>

        </div>
    </header>);
}

export default Header;
