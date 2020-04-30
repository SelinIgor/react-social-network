import React from 'react';
import s from './Masseges.module.css';
import {NavLink} from "react-router-dom";


const Masseges = ()=> {
    return (
        <div className={s["mainMasseges"]}>
            <div className={s["dialogsItem"]}>
                <div className={`${s.dialog } ${s.active}`}> <NavLink to="/Masseges/1">Igor</NavLink></div>

                <div className={s.dialog}><NavLink to="/Masseges/2"> Oleg</NavLink></div>

                <div className={s.dialog}><NavLink to="/Masseges/3"> Nestor</NavLink></div>

                <div className={s.dialog}><NavLink to="/Masseges/4"> Stepan</NavLink></div>

                <div className={s.dialog}><NavLink to="/Masseges/5"> Taras</NavLink></div>
            </div>
            <div className={s.masseges}>
                <div> Hi!</div>
                <div> Hello!</div>
                <div> You are stupid</div>
                <div> I know</div>
            </div>



        </div>

    );
}


export default Masseges;
