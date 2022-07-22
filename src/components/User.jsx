import React from 'react';
import s from './Users.module.css';
import userPhoto from '../img/user image.png';
import {NavLink} from "react-router-dom";

let User = ({user, followingProgress, follow, unfollow}) => {

    return (
        <div>
                <div>
                        <NavLink to={'/content' + user.id}>
                            <img src={user.photos.small != null
                                ? user.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                <div>
            {user.followed
                ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id);
                }}>Unfollow</button>
                : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id);
                }}>Follow</button>}
                </div>
                </div>
            <div className={s.userText}>
                <span>
                <div className={s.name}>{user.name}</div>
                <div>{user.status}</div>
                </span>
                <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
                </span>
                </div>
        </div>
    )
}

export default User;