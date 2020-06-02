import s from "./ProfileInfo.module.css";
import React from "react";
const ProfileInfo =()=> {
    return(<div >
<div className={s.conteiner}>
        <div className={s.background}>
            <img src={"https://focus.ua/storage/pub/images/2017/2615387.jpg"} className={s.avatar}/>
            <div className={s.userName}>Igor Selin</div>
        </div>
    <div>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцам
        и Lorem Ipsum в 60-х годах и, в более недавнее время, программы
        электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</div>
        </div>
    </div>);
}
export default ProfileInfo;
