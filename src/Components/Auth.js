import React from 'react';
import {connect} from "react-redux";

import {onSignIn as onSignInAction, onSignUp as onSignUpAction} from "../redux/modules/auth";
import {Login , SignUp} from "../pages";

const pageSwitcherAction = {
    signUp: 'sign-up',
    signIn: 'sign-in',
}


const AuthUser = ({ pageSwitcher, onSignUp, onSignIn, onLoginSaveState}) => {

    switch (true){
        case pageSwitcherAction.signUp === pageSwitcher:
            return < SignUp onSignUp={onSignUp} onLoginSaveState={onLoginSaveState}/>
        case pageSwitcherAction.signIn === pageSwitcher:
            return  < Login onSignIn={onSignIn} onLoginSaveState={onLoginSaveState}/>
    }
};

export default connect(
    null,
    {
        onSignIn: onSignInAction,
        onSignUp: onSignUpAction
    }
)(AuthUser);