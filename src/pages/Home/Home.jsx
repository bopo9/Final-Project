import React, { Component } from 'react';
import {
    Header,
    Navbar,
    Main,
    TweetForm,
    Feed,
    Tweet,
    CreatePost
} from '../../Components';


class Home extends Component {
    constructor() {
        super();
    }

    componentDidMount(){
        document.title = "ATOM - Home";

    }

    render() {
        return <>
            <Header />
            <Main>
                <Navbar  />
                <div className="tweet__wrapper">
                    <CreatePost />
                    <Feed />
                </div>
            </Main>
        </>
    }
}

export default Home;