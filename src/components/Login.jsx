import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "./FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "./redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required],
                Input, {type: "password"})}
            {createField(null, "rememberMe", [],
                Input, {type: "checkbox"}, "Remember me")}
            {captchaUrl && <img src={captchaUrl} alt={"Captcha must be here"}/>}
            {captchaUrl &&
            createField("Symbols from image", "captcha", [required],
                Input, {})}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/content"}/>
    }

    return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);