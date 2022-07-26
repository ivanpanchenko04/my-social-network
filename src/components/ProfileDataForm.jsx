import React from "react";
import {createField, Input, Textarea} from "./FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "./FormsControls/FormsControls.module.css";
import style from "./Content.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form className={style.profileData} onSubmit={handleSubmit}>
        <div className={style.data}>
            <div className={style.item}>
                <b>Name:</b> {createField("Name", "fullName", [], Input)}
            </div>
            <div className={style.item}>
                <b>Am I looking for a job?</b>
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div className={style.item}>
                <b>My professional skills:</b>
                {createField("My professional skills", "lookingForAJobDescription",
                    [], Textarea)}
            </div>
            <div className={style.item}>
                <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
            </div>
        </div>
        <div className={style.contacts}>
            <h3>Contacts</h3> {Object.keys(profile.contacts).map(key => {
            return <div className={style.contact} key={key}>
                <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
            </div>
        })}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            {<div className={style.editData}>
                <button>Save</button>
            </div>}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm