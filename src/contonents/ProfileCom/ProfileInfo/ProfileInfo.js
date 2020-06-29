import s from "./ProfileInfo.module.css";
import React from "react";
const ProfileInfo =()=> {
    return(<div >
<div className={s.conteiner}>
        <div className={s.background}>
            <img src={"https://focus.ua/storage/pub/images/2017/2615387.jpg"} className={s.avatar}/>
            <div className={s.userName}>Igor Selin</div>
        </div>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolorum eligendi enim in nobis quae rem rerum tempora. Aut distinctio eaque esse eveniet incidunt molestias possimus quibusdam. Adipisci deserunt dolores ea earum, eos laborum non quaerat qui tempora unde? Dolores minima modi mollitia nam pariatur perferendis quam velit vero voluptatibus?</div>
    <hr className={s.line}/>
        </div>

    </div>);
}
export default ProfileInfo;
