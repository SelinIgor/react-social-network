import React from 'react';
import n from './Header.module.css';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import $ from "jquery"

class Header extends React.Component {
    componentDidMount() {
        $(function (){
            let header = $("#header");
            let inner =$("#inner")
            let headerH = inner.innerHeight();
            let nav= $("#nav");


            $(window).on("scroll resize load",function (){
                let scrollPos = $(window).scrollTop();
                if(scrollPos > headerH){
                header.addClass(n.container);
                nav.addClass(s.fixed)

            }
        else {
                header.removeClass(n.container);
                    nav.removeClass(s.fixed)
            }
            })




        })
    }
    render() {


        return (<div>
            <div id={"inner"}>
            {/*Header*/}
            <header className={n.Header}  id={"header"}>
                <div>
                    <div className={n.logoContainer}>
                        <div><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
                        </div>
                        <div className={n.nameLogo}>Keetouch</div>
                    </div>

                </div>

            </header>

            {/*Hav*/}
            <nav className={s.Nav} id={"nav"}>
                <div className={s.topNav}>
                    <div className={s.Container}>
                        <div className={s.menu}>
                            <NavLink to="/profile" className={s.nav} activeClassName={s.active}>Profile</NavLink>

                            <NavLink to="/messages" className={s.nav} activeClassName={s.active}>Messages</NavLink>
                            <NavLink to="/users" className={s.nav} activeClassName={s.active}> Users</NavLink>

                            <NavLink to="/music" className={s.nav} activeClassName={s.active}>Music</NavLink>


                            <NavLink to="/setting" className={s.nav} activeClassName={s.active}> Setting</NavLink>
                        </div>
                        <div>

                            {
                                this.props.isAuth ?

                                    <NavLink to={"#"} className={s.nav} activeClassName={s.active} onClick={this.props.logout}>Exit</NavLink>
                                    :
                                    <NavLink className={s.nav} activeClassName={s.active} to={"/login"}>Login</NavLink>
                            }
                        </div>



                    </div>
                </div>
            </nav>
            </div>
        </div>);
    }
}


function mapStateToProps(state) {
        return {
            isAuth:state.auth.isAuth,

        }
    }

    export default connect(mapStateToProps,{ logout})(Header)
