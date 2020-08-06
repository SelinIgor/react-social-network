import React from "react";

import style from "./LoginPage.module.css"
const Loginpage = () =>{
    return(<div>
        <div className={style.textContainer}>
           <div><p className={style.loginText}> LOGIN</p></div>
            <form>
            <input type="login"/>
            <input type="password"/>
            <button type="submit">Submit</button>
            </form>

        </div>

    </div>)




}
export default Loginpage;