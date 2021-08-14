import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import{
    Headers,
    Navbar,
    Main,
    TweetForm,
    Tweet
} from './Components'

import  'normalize.css'
import './css/main.sass'

class App extends Component {
    render() {
        return <Router>
            <Switch>
                <Route path={'/'} exact>
                    <Home />
                </Route>
                <Route path={'/login'} exact>
                    <Login />
                </Route>
                <Route path={'/register'} exact>
                    <Register />
                </Route>
                <Route path={'/Profile'} exact>
                    <Profile />
                </Route>
            </Switch>
        </Router>
    }
}

export default App;


<Headers />
<Main>
    <Navbar />
    <div className="tweet__wrapper">
        <TweetForm />
        <Tweet />
    </div>
</Main>