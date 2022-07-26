import React from 'react';
import Content from "./Content";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "./redux/content-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ContentContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userId}
                     info={this.props.info} status={this.props.status}
                     updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.postsPage.profile,
    status: state.postsPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
) (ContentContainer);