import { connect } from "react-redux";
import Massages from "./Massages";
import { sendMessageCreator } from "./redux/messages-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        massagesPage: state.massagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMassageBody) => {
            dispatch(sendMessageCreator(newMassageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Massages);
