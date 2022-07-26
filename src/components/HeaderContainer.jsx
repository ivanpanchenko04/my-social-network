import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "./redux/auth-reducer";
import {getUserProfile} from "./redux/content-reducer";

const HeaderContainer = (props) => {
    return <Header {...props}/>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout, getUserProfile})(HeaderContainer);