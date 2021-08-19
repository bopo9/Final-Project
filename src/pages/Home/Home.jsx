import React, { Component } from 'react';
import {
    Header,
    Navbar,
    Main,
    TweetForm,
    Tweet, Headers
} from '../../Components'

class Home extends Component {
    render() {
        return <>
            <Header />
            <Main>
                <Navbar />
                <div className="tweet__wrapper">
                    <TweetForm />
                    <Tweet />
                </div>
            </Main>
        </>
    }
}

export default Home;