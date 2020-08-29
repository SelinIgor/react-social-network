import style from "./ProlifeStatus.module.css"
import React, {useState} from "react";

const ProfileStatusWithHook =(props)=> {
    const [editMode, setEditMode] = useState(false);
    const ActivateEditMode = ()=>{
        setEditMode(true)
    }
    const DeactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }
    const [status,setStatus] = useState(props.status)


    function onStatusChange(e) {
        setStatus(e.currentTarget.value)
    }

    return <div>
            <div className={style.mainContainer}>
                {!editMode&& <div>
                    <span className={style.statusText} onDoubleClick={ActivateEditMode}>{props.status}</span>
                </div>}
                {editMode&&
                <div>
                    <input onChange={onStatusChange}  autoFocus={true} onBlur={DeactivateEditMode} value={status} />
                </div>}
            </div>

        </div>
    }

export default ProfileStatusWithHook;