import React from "react";
import a from "./Users.module.css";
import userPhoto from "../../datas/img/user.png";
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

                        <div><img className={a.userImg} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                      props.unfollow(u.id)
                                    }}> unfollow</button>
                                    : <button onClick={() => {
                                      props.following(u.id)
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