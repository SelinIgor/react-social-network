import React from "react";
import style from "./LoginPage.module.css"
import {Field, reduxForm} from "redux-form";
import {Element} from "../FormsControls/FormsControls";
const Input = Element("input")
export const required = (value) => (value  ?  undefined : 'Required');
const Loginpage = () =>{
    return(<div>
        <div className={style.textContainer}>
           <div><p className={style.loginText}> LOGIN</p></div>
          <LoginReduxForm onSubmit={onSumbit}/>
</div>
    </div>)
};
let onSumbit = (value)=>{
window.alert(JSON.stringify (value));
}
const LoginForm = (props) =>{
    debugger;
    return(
        <form onSubmit={props.handleSubmit}>
        <Field type="login" name="login" placeholder="your login" component={Input} validate={ required }/>
        <Field type="password" name="password" placeholder="your password" component={Input} validate={ required }/>
        <Field type="checkbox" name="rememberMe" component={"input"}/> remember me
        <button type="submit">Submit</button>
    </form>)
};
const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);
export default Loginpage;