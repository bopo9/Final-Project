import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import configureStore from "./redux/store";
import {Provider,connect} from "react-redux";

import Auth from "./Components/Auth";

import {
    Home,
    Login,
    SignUp,
    Profile
} from './pages'

import  'normalize.css'

import './css/main.sass'
import auth from "./redux/modules/auth";

import {useEffect} from "react";


class App extends Component {
    constructor({auth}) {
        super();
        this.state = {
            isAuth: false
        }
    }


    onLogin = (token, email) => {
        if (token){
            localStorage.setItem('userData', JSON.stringify({
                token,
                email,
                isAuth: true
            }));
        }
    }


    render() {
        const { isAuth } = this.state;

        return <Router >
                    <Switch>
                        <Route path='/sign-in' >
                            {isAuth ? <Redirect to='/' /> : <Auth pageSwitcher={'sign-in'} onLoginSaveState={this.onLogin}/>}
                        </Route>
                        <Route path={'/'}  exact>
                            {isAuth ? <Home onLogout={this.onLogout} /> :  <Redirect to='/sign-in' />}
                        </Route>
                        <Route path={'/sign-up'}>
                            <Auth pageSwitcher={'sign-up'} onLogin={this.onLogin} />
                        </Route>
                        <Route path={'/profile'} >
                            {isAuth ? <Profile /> : <Redirect to='/sign-in' /> }
                        </Route>
                    </Switch>
                </Router>
    }
}



export default connect(
    ({ auth }) => ({  auth: auth}),
        null
)(App);