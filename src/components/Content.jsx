import React from 'react';
import s from "./Content.module.css";
import PostsContainer from "./PostsContainer";
import Preloader from "./Preloader";
import bigPhoto from '../img/coffee.jpg';
import ContentInfo from "./ContentInfo";

const Content = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            {/*<div className={s.photo}>
                <img src={bigPhoto} alt={"Sorry, photo is not found"}/>
            </div>*/}
            <div>
                <ContentInfo savePhoto={savePhoto} isOwner={isOwner}
                             status={status} updateStatus={updateStatus}
                             profile={profile} saveProfile={saveProfile}/>
            </div>
            <div>
                <PostsContainer/>
            </div>
        </div>
    )
}

export default Content;