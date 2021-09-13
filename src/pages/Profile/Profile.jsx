import React, { Component } from 'react';
import {
    Header,
    Navbar,
    Main,
    ProfileComponent
} from '../../Components'

class Profile extends Component {
    componentDidMount(){
        document.title = "ATOM - Profile"
    }

    render() {
        return <>
            <Header />
            <Main>
                <Navbar />
                <ProfileComponent />
            </Main>
        </>
    }
}

export default Profile;