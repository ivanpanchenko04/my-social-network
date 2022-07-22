import React from "react";
import s from "./Massages.module.css";
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "./FormsControls/FormsControls";
import friendPhoto from "../img/dragon.jpg";

const MassagesItem = (props) => {
    let path = "/Massages/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props) => {
    return (
        <div className={s.chat}>
            <div>
                <img src={friendPhoto} alt="Sorry, photo not found"/>
            </div>
            <div className={s.text}>
                <h5>{props.name}</h5>
                <p>{props.massage}</p>
            </div>
        </div>
    )
}

const Massages = (props) => {
    let state = props.massagesPage;

    let massagesElements = state.massages
        .map(massage => <MassagesItem name={massage.name} id={massage.id} key={massage.id}/> );
    let lettersElements = state.letters
        .map(letter => <Massage name={letter.name} id={letter.id} 
            massage={letter.massage} key={letter.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMassageBody);
    }

    if (!props.isAuth) return <Redirect to="/login"/>;

    return (
        <div className={s.massages}>
            <div className={s.people}>
                {massagesElements}
            </div>
            <div className={s.letters}>
                {lettersElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMassageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Massages;