import React from "react";
import prel from "../../../datas/img/prel.gif";
import style from "../../Users/UsersContainer.module.css";
let Preloader = (props)=>{
    return  (<div>
        <img src={prel} className={style.preloader}/></div>)

}
export default Preloader;