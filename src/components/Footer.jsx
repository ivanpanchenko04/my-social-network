import React from "react";
import s from "./Footer.module.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={s.down}>
            <div className={s.firstBlock}>
                <NavLink to="#">Privacy Policy</NavLink>
                <NavLink to="#">About us</NavLink>
                <NavLink to="#">Other projects</NavLink>
            </div>
            <div className={s.secondBlock}>
                <NavLink to="#">Follow us</NavLink>
                <NavLink to="#">Our team</NavLink>
                <NavLink to="#">Our news</NavLink>
            </div>
            <div className={s.thirtyBlock}>
                <h1>Good luck!</h1>
                <p>2021-2022</p>
            </div>
        </footer>
    )
}

export default Footer;