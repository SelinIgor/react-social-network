import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../datas/img/user.png";
import {NavLink} from "react-router-dom";

type User = {
    id:number
    status?: string
    name: string
    photos: Photo
    followed: boolean
}
type Photo ={
    small?: string
    large?: string
}
type PropsType = {
    users: Array<User>
    followProgress: (id:number)=>any
    follow:(id:number)=>void
    unfollow: (id:number)=>void
}



let Users:React.FC<PropsType> = (props) => {


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
                                        // @ts-ignore
                                        ? <button  disabled={props.followProgress.some(id=> id===u.id)} onClick={() => {
                                            props.unfollow(u.id);

                                        }}> unfollow</button>
                                        // @ts-ignore
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