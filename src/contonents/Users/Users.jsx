import React from "react";
import a from "./Users.module.css"
let Users = (props)=>{

    if (props.users.length===0){

        props.setUsers ( [

        {id:1, followed:true, fullname:"Igor Selin", status: "I am on my way", location:{ city:"Lviv",country:"Ukraine"}},
        {id:2, followed:false, fullname:"Nestor Selin", status: "Delevoping is coll", location:{ city:"Lviv",country:"Ukraine"}},
        {id:3, followed:false, fullname:"Olesya Selin", status: "Sranaya nesastykovochka", location:{ city:"Lviv",country:"Ukraine"}},
        {id:4, followed:true, fullname:"Oleg Selin", status: "Free phychoterpiya", location:{ city:"Lviv",country:"Ukraine"}},
    ])
    }
    return ( <div>

        {
            props.users.map(u => <div key={u.id}>
                <div className={a.Container}>
                <div>

                    <div> <img className={a.userImg} src="https://thestacker.com/sites/default/files/styles/properly_sized_image/public/Authors_one_book_Slide_17.png"/></div>
               <div>
                   {
                       u.followed
                       ?<button onClick={()=>{props.unfollow(u.id)}}> unfollow</button>
                       :<button onClick={()=>{props.following(u.id)}}>follow</button>

                   }
               </div>

                </div>
                    <div>

                        <div>{u.fullname}</div>
                        <div><p> {u.status}</p></div>
                        </div>
                        <div> {u.location.city} <br/>
                           {u.location.country}

                        </div>
                </div>
            </div>)
        }
    </div>)

}
export default Users;