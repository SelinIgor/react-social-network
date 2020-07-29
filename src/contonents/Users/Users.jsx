import React from "react";
import a from "./Users.module.css";
import userPhoto from "../../datas/img/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followingInProgress} from "../../redux/usersReducer";
let Users = (props) =>{
    let totalPagesCount = props.totalUsersCount/props.pageSize;
    let pages =[];
    for (let i=1;i<=totalPagesCount;i++){
        pages.push(i)
    }
    return  <div>
        <div>
            {
                pages.map(p=>
<button onClick={()=>props.onClickChanged(p)}
        className={props.currentPage===p && a.selectedPage}>{p}
</button>)
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={a.Container}>
                    <div>

                        <div><NavLink to={"/profileCom/"+u.id}>
                            <img className={a.userImg} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button disabled={props.followProgress.some(id=> id===u.id)} onClick={() => {
                                        props.followingInProgress(true, u.id)
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true,headers:{
                                            "API-KEY":"14afbc17-5def-47a5-befe-a2e4e52003d8"
                                            }}).then(response => {
                                           if(response.data.resultCode===0){
                                               props.unfollow(u.id)
                                           }
                                            props.followingInProgress(false,u.id)
                                        });

                                    }}> unfollow</button>
                                    : <button disabled={props.followProgress.some(id=> id===u.id)}  onClick={() => {
                                        props.followingInProgress(true,u.id)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true,headers:{
                                                "API-KEY":"14afbc17-5def-47a5-befe-a2e4e52003d8"
                                            }}).then(response => {
                                            if(response.data.resultCode===0){
                                                props.follow(u.id)
                                            }
                                            props.followingInProgress(false,u.id)
                                        });
                                    }}>follow</button>

                            }
                        </div>

                    </div>
                    <div>

                        <div>{u.name}</div>
                        <div><p> {u.status}</p></div>
                    </div>
                    <div> {"u.location.city"} <br/>
                        {"u.location.country"}

                    </div>
                </div>
            </div>)
        }
    </div>
}
export default Users