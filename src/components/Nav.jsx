import React from 'react';
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <NavLink to="/content">Home</NavLink><br/>
                <NavLink to="/massages">Messages</NavLink><br/>
                <NavLink to="/users">Users</NavLink><br/>
                <NavLink to="#">Music</NavLink><br/>
                <NavLink to="#">Groups</NavLink><br/>
            </ul>
        </nav>
    )
}

export default Nav;