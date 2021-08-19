import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import {
    Header,
    Navbar,
    Main,
    TweetForm,
    Tweet,
} from './Components'

import {
    Home,
    Login,
    SignUp
} from './pages'


import  'normalize.css'
import './css/main.sass'

class App extends Component {
    render() {
        return <Router>
            <Switch>
                <Route path='/login' component={Login}>
                    <Login />
                </Route>
                <Route path={'/'}  exact>
                    <Home />
                </Route>
                <Route path={'/sign-up'}>
                   <SignUp />
                </Route>
                <Route path={'/Profile'} >

                </Route>
            </Switch>
        </Router>
    }
}



export default App;