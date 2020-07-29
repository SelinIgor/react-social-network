import React from 'react';
import s from './Header.module.css';
const Header = (props)=> {

    return (<header className={s.Header}>
<div className={s.headerContainer}>
<div className={s.logoConteiner}>
       <div> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/></div>
 <div className={s.nameLogo}>Keetouch</div>
</div>


    <div className={s.authBlock}>
        {
            props.isAuth? <div> <div> {props.login}</div> <div> { props.photo? props.photo.small:
                <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"/>}</div></div>
                : <div>Login</div>
        }

    </div>

</div>
    </header>);}
    export default Header;
