import React from 'react';
import Content from "./Content";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getStatus, updateStatus} from "./redux/content-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ContentContainer extends React.Component {

    componentDidMount() {
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

    render() {
        return (
            <Content {...this.props} profile={this.props.profile} info={this.props.info}
                     status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.postsPage.profile,
    status: state.postsPage.status,
    info: state.postsPage.info,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
) (ContentContainer);