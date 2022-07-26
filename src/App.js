import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import {HashRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import UsersContainer from "./components/UsersContainer";
import HeaderContainer from "./components/HeaderContainer";
import Login from "./components/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./components/redux/app-reducer";
import Preloader from "./components/Preloader";
import {compose} from "redux";
import store from "./components/redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import Footer from "./components/Footer";

const ContentContainer = React.lazy(() => import("./components/ContentContainer"));
const MassagesContainer = React.lazy(() => import("./components/MassagesContainer"));

class App extends React.Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app">
                <HeaderContainer/>
                <Nav/>
                <div className="app-massages">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/content"}/>}/>
                        <Route path="/content:userId?"
                               render={withSuspense(ContentContainer)}/>
                        <Route path="/massages"
                               render={withSuspense(MassagesContainer)}/>
                        <Route path="/users"
                               render={() => <UsersContainer/>}/>
                        <Route path="/login"
                               render={() => <Login/>}/>
                        <Route path="*" render={() => <div>404 Not found</div>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = () => {
    return <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default SamuraiJSApp;