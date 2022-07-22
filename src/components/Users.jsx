import React from 'react';
import s from './Users.module.css';
import Paginator from "./Paginator";
import User from "./User";

let Users = ({
                 totalUsersCount, pageSize, currentPage, onPageChanged,
                 users, followingProgress, follow, unfollow
             }) => {

    return (
        <div className={s.users}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div className={s.user}>
                {
                    users.map(user => <User key={user.id}
                                            user={user}
                                            followingProgress={followingProgress}
                                            follow={follow}
                                            unfollow={unfollow}/>
                    )
                }
            </div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        </div>
    )
}

export default Users;