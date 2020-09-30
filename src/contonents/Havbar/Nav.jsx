import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
const Nav = (props)=> {
    return (<div className={s.Nav}>
        <div className={s.topNav}>
            <div className={s.Container}>
                <div>
                <NavLink to="/profile" className={s.nav}  activeClassName={s.active}>Profile</NavLink>

                <NavLink to="/messages"  className={s.nav} activeClassName={s.active} >Messages</NavLink>

                <NavLink to="/music"  className={s.nav} activeClassName={s.active} >Music</NavLink>

                <NavLink to="/users"  className={s.nav} activeClassName={s.active}> Users</NavLink>

                <NavLink to="/setting"  className={s.nav} activeClassName={s.active}> Setting</NavLink>
                </div>
                <div>
                {
                    props.isAuth ?
                            <NavLink to={"#"} className={s.nav} onClick={props.logout} >Exit</NavLink>
                        : <NavLink className={s.nav} activeClassName={s.active}  to={"/login"}>Login</NavLink>
                }
                </div>


            </div>
        </div>
        </div>);}

function mapStateToProps(state) {
    return {
        isAuth:state.auth.isAuth,

    }
}

export default connect(mapStateToProps,{ logout})(Nav)
