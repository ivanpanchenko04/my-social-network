import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import logo from "../img/newLogo.png";
import userPhoto from "../img/user image.png";
import myPhoto from "../img/zhivotnye_igra_sobaka_19261.jpg";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt={"Sorry, photo is not found"}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <LoginBlock login={props.login} logout={props.logout} profile={props.profile}/>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

const LoginBlock = (props) => {
    return <div className={s.ifIsAuth}>
        <div>
            <div className={s.picture}>
                {/*<img src={props.profile.photos.small != null
                    ? props.profile.photos.small : userPhoto} alt={"Sorry, photo is not found"}/>*/}
                <img src={myPhoto} alt={"Sorry, photo is not found"}/>
            </div>
            <div>
                {props.login}
            </div>
        </div>
        <div>
            <button onClick={props.logout}>Log out</button>
        </div>
    </div>
}

export default Header;