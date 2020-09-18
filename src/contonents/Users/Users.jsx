import React, {useState} from "react";
import a from "./Users.module.css";
import userPhoto from "../../datas/img/user.png";
import {NavLink} from "react-router-dom";

let Users = (props,{portionSize=10}) => {
    let totalPagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(totalPagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftBorder = (portionNumber - 1) * portionSize + 1;
    let rightBorder = portionNumber * portionSize;
    let newCurrentPage = (leftBorder)=>{
        debugger;
        props.onClickChanged(leftBorder+portionSize);
    }
    let prevCurrentPage = (leftBorder)=>{

        props.onClickChanged(leftBorder-portionSize);
    }

    return  <div>
        <div className={a.paginator}>
        {portionNumber>1&& <button onClick={()=>{setPortionNumber(portionNumber-1);prevCurrentPage(leftBorder)}}>PREV</button>}
        <div className={a.buttonsBlock}>
            {
                pages.filter(p=>p>=leftBorder && p<=rightBorder)
                    .map(p=>
<button  onClick={()=>props.onClickChanged(p)}
        className={props.currentPage===p && a.selectedPage} key={p}>{p}
</button>)
            }

        </div>
        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1);newCurrentPage(leftBorder) }}>NEXT</button>

        }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={a.Container}>
                    <div>

                        <div><NavLink to={"/profile/"+u.id}>
                            <img alt={"user's photo"} className={a.userImg} src={u.photos.small != null ? u.photos.small : userPhoto}/>
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