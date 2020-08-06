import React from "react";
import a from "./Users.module.css";
import userPhoto from "../../datas/img/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) =>{
    let totalPagesCount = props.totalUsersCount/props.pageSize;
    let pages =[];
    //взяв і штучно обмежив кількість
    for (let i=1;i<=50;i++){

            pages.push(i)

    }
    return  <div>
        <div className={a.buttonsBlock}>
            {
                pages.map(currentPage=>
<button  onClick={()=>props.onClickChanged(currentPage)}
        className={props.currentPage===currentPage && a.selectedPage}>{currentPage}
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
                                        props.unfollow(u.id);

                                    }}> unfollow</button>
                                    : <button disabled={props.followProgress.some(id=> id===u.id)}  onClick={() => {
                                       props.follow(u.id);
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