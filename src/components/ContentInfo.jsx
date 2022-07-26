import React, {useState} from "react";
import s from "./Content.module.css";
import userPhoto from "../img/user image.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ContentInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={s.aboutMe}>
            <div className={s.photoAndStatus}>
                <div className={s.picture}>
                    <img src={profile.photos.large != null
                        ? profile.photos.large : userPhoto} alt={"Sorry, photo is not found"}/>
                </div>
                {isOwner && <label className={s.feedbackLabel}>Choose the photo
                    <input type={"file"} className={s.feedbackInput} onChange={onMainPhotoSelected}/>
                </label>}
                <div className={s.status}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
            <div className={s.profileDataAndForm}>
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   goToEditMode={() => {setEditMode(true)}} isOwner={isOwner}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.profileData}>
        <div className={s.data}>
            <div className={s.item}>
                <b>Name:</b> {profile.fullName}
            </div>
            <div className={s.item}>
                <b>Am I looking for a job?</b> {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div className={s.item}>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
            <div className={s.item}>
                <b>About me:</b> {profile.aboutMe}
            </div>
        </div>
        <div className={s.contacts}>
            <h3>Contacts</h3> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
            {isOwner && <div className={s.editData}><button onClick={goToEditMode}>Edit</button></div>}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ContentInfo;