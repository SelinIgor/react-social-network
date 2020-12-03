import React, {useState} from "react";
import s from './Paginator.module.css'
import cn from 'classnames'
const Paginator =(props,{portionSize=10})=> {
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
        props.onClickChanged(leftBorder+portionSize);
    }
    let prevCurrentPage = (leftBorder)=>{

        props.onClickChanged(leftBorder-portionSize);
    }
    return(
    <div>
        <div className={s.buttonsContainer}>
        {portionNumber > 1 && <button className={s.controlButton} onClick={() => {
            setPortionNumber(portionNumber - 1);
            prevCurrentPage(leftBorder)
        }}>PREV</button>}
        <div>
            {
                pages.filter(p => p >= leftBorder && p <= rightBorder)
                    .map(p =>
                        <button onClick={() => props.onClickChanged(p)}
                                className={cn(s.button, (props.currentPage === p && s.selectedPage))} key={p}>{p}
                        </button>)
            }

        </div>
        {portionCount > portionNumber &&
        <button className={s.controlButton} onClick={() => {
            setPortionNumber(portionNumber + 1);
            newCurrentPage(leftBorder)
        }}>NEXT</button>

        }
        </div>
    </div>)
}
export default Paginator;