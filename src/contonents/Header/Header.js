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
            let inner =$("#inner")
            let headerH = inner.innerHeight();


            $(window).on("scroll resize load",function (){
                let scrollPos = $(window).scrollTop();
                if(scrollPos > headerH){
                inner.addClass(s.fixed)

            }
        else {
                    inner.removeClass(s.fixed)
            }
            })
let container = $("#container");
            $("#toggleMenu").on("click", function (event){

                event.preventDefault();
                container.toggleClass(s.show)

            });
            $("NavLink").on("click", function (){
                container.removeClass(s.show)
            })

        })
    }
    render() {


        return (<div>
            <div id={"inner"}>
            {/*Header*/}
            <header className={n.Header}>
                <div>
                    <div className={n.logoContainer}>
                        <div><img alt={"logo"}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
                        </div>
                        <div className={n.nameLogo}>Keetouch</div>
                    </div>

                </div>
              <button className={s.burger}>  <div  id={"toggleMenu"}><i className="fas fa-bars"></i></div></button>

            </header>
            <nav className={s.Nav} id={"nav"}>
                <div>
                    <div className={s.Container} id={"container"}>
                            <NavLink to="/profile" className={s.nav} activeClassName={s.active} id={"navItem"}>Profile</NavLink>

                            <NavLink to="/messages" className={s.nav} activeClassName={s.active} id={"navItem"}>Messages</NavLink>
                            <NavLink to="/users" className={s.nav} activeClassName={s.active} id={"navItem"}> Users</NavLink>

                            <NavLink to="/music" className={s.nav} activeClassName={s.active} id={"navItem"}>Music</NavLink>


                            <NavLink to="/setting" className={s.nav} activeClassName={s.active} id={"navItem"}> Setting</NavLink>
                            {
                                this.props.isAuth ?

                                    <NavLink to={"#"} className={s.nav} onClick={this.props.logout} id={"navItem"}>Exit</NavLink>
                                    :
                                    <NavLink className={s.nav} to={"/login"} id={"navItem"}>Login</NavLink>
                            }


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
