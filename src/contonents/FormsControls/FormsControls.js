import React from "react";
import styles from "./FormsControls.module.css"
import classNames from 'classnames'
export const Element = (Element) =>({input,meta,className,...props})=> {
    const hasError = meta.touched && meta.error;
    const styleTextarea = classNames(className, (hasError && styles.error))
    return (
        <div>
            <div>
                <Element {...input} {...props} className={styleTextarea}/>
            </div>
            {hasError && <span className={styles.spanError}>{meta.error}</span>}
        </div>
    )
}


