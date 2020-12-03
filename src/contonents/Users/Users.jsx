import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../datas/img/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    return  <div>

        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div  className={s.container}>
                    <div>

                        <div className={s.avatarName}><NavLink to={"/profile/"+u.id}>
                            <img alt={"user's photo"} className={s.userImg} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                            <div>{u.name}</div>
                            <div className={s.followBtn}>
                                {
                                    u.followed
                                        ? <button  disabled={props.followProgress.some(id=> id===u.id)} onClick={() => {
                                            props.unfollow(u.id);

                                        }}> unfollow</button>
                                        : <button disabled={props.followProgress.some(id=> id===u.id)}  onClick={() => {
                                            props.follow(u.id);
                                        }}>follow</button>

                                }
                            </div>
                        </div>

                    </div>
                    <div className={s.infoUser}>
                        <div><p> {u.status && `Status: ${u.status}` }</p></div>
                        <div>
                            <p>User id: {u.id}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>)
        }
    </div>
}
export default Users