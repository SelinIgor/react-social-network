import React from "react";
import style from "./LoginPage.module.css"
import {Field, reduxForm} from "redux-form";
import {Element} from "../FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "./../FormsControls/FormsControls.module.css"
const Input = Element("input")
export const required = (value) => (value  ?  undefined : 'Required');
const Loginpage = (props) =>{
    let onSubmit = (value)=>{
        props.login(value.email,value.password,value.rememberMe, value.captcha)
    }
    if (props.isAuth){
        return (
            <Redirect to={"/profile"}/>
        )
    }
    return(<div>
        <div className={style.textContainer}>
           <div><p className={style.loginText}> LOGIN</p></div>
          <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
</div>
    </div>)
};
const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
        <Field type="login" name="email" placeholder="your login" component={Input} validate={ required }/>
        <Field type="password" name="password" placeholder="your password" component={Input} validate={ required }/>
        <Field type="checkbox" name="rememberMe" component={"input"}/> remember me
            {(props.error)?<div className={styles.spanError}>{props.error}</div>:undefined}
            {props.captchaUrl && <div><img src={props.captchaUrl} /><div><Field type="text" name="captcha" placeholder={"enter symbols what you see"} component={"input"}/></div> </div>}
        <button type="submit">Submit</button>
    </form>)
};
const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);
const mapStateToProps =(state)=>{
    return{
        isAuth:state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps,{login}) (Loginpage);