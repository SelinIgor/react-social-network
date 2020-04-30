import React from 'react';
import s from './Masseges.module.css';


const Masseges = ()=> {
    return (
        <div className={s["mainMasseges"]}>
            <div className={s["dialogsItem"]}>
                <div className={`${s.dialog } ${s.active}`}> Igor</div>

                <div className={s.dialog}> Oleg</div>

                <div className={s.dialog}> Nestor</div>

                <div className={s.dialog}> Stepan</div>

                <div className={s.dialog}> Taras</div>
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
