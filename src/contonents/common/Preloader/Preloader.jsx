import React from "react";
import prel from "../../../datas/img/prel.gif";
import style from "./Preloader.module.css";
let Preloader = (props)=>{
    return  (<div>
        <div className={style.preloaderConatiner}>
        <img src={prel} className={style.preloader}/>
        </div>
        </div>)

}
export default Preloader;