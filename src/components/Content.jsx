import React from 'react';
import s from "./Content.module.css";
import PostsContainer from "./PostsContainer";
import Preloader from "./Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../img/user image.png';
import bigPhoto from '../img/coffee.jpg';

const InfoItem = (props) => {
    return <div>
        <span className={s.type}>{props.typeOfInfo}</span>
        <span>{props.text}</span>
    </div>
}

const Content = ({profile, status, updateStatus, info}) => {
    let infoElements = info.map(i => <InfoItem key={i.id} id={i.id} typeOfInfo={i.typeOfInfo} text={i.text}/>);

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div className={s.photo}>
                <img src={bigPhoto}/>
            </div>
            <div className={s.aboutMe}>
                <div>
                    <div className={s.picture}>
                        <img src={profile.photos.large != null
                            ? profile.photos.large : userPhoto} className={s.picture}/>
                    </div>
                    <div className={s.status}>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
                <div className={s.info}>
                    {infoElements}
                </div>
            </div>
            <div>
                <PostsContainer/>
            </div>
        </div>
    )
}

export default Content;