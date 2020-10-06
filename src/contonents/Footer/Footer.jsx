import React from "react";
import s from './Footer.module.css'

const Footer = (props)=>{
    return(<div>
        <div className={s.footerContainer}>
        <div className={s.authorInfo}>
            site design / logo © 2020 Igor Selin; All rights aren't received
        </div>
        </div>
    </div>)
}
export default Footer