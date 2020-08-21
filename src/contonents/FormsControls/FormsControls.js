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



//  const FormControls =({input,meta,child,...props})=>{
//     const hasError = meta.touched && meta.error;
//     return(
//         <div>
//             <div>
//                 {props.children}
//             </div>
//                 {hasError && <span className={hasError && styles.spanError}> {meta.error} </span>}
//         </div>
//     )
// };
// export const Textarea =(props)=>{
//    const {input,meta,child,...restProps} = props;
//     return(
//         <FormControls {...props}>
//             <textarea {...input} {...restProps} > </textarea>
//         </FormControls>
//     )
//
// };
//
//
//
//
// export const Input =(props)=>{
//     const {input,meta,child,...restProps} = props;
//     return(
//         <FormControls {...props}>
//             <input {...input} {...restProps}/>
//         </FormControls>
//     )
//
// };

