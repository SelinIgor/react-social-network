import React from "react";
import styles from "./FormsControls.module.css"

export const Element = (Element) =>({input,meta,...props})=>{
    const hasError = meta.touched && meta.error
    return(
        <div>
            <div >
        <Element {...input} {...props} className={hasError && styles.error}/>
            </div>
            {hasError && <span className={styles.spanError}>{meta.error}</span>}
        </div>
    )
}