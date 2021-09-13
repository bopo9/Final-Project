import {Redirect} from "react-router-dom";
import React from "react";


const moduleName = 'auth';

const ON_AUTH = `${moduleName}/ON_AUTH`;

const defaultState = {
    authData: {
        token: null,
        isAuth: false,
        user: {
            email: '',
        }
    },
};


export default (state = {defaultState}, { type, payload }) => {
    switch (type){
        case ON_AUTH:
            return { ...state, authData: payload };
        default:
            return state;
    }
};

export const onSignIn = ({email, password}, callback) => async (dispatch) => {
    try {
        await fetch('http://143.198.136.212/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(data => data.json())
            .then((data) => {
                callback(data.token, email);
                dispatch({type: ON_AUTH, payload: {token: data.token, isAuth: true, email}});
            });
    } catch (error) {
        console.log(error)
    }
}



export const onSignUp = ({email, password, firstName, lastName, nickname}, callback) => async (dispatch) => {
    try {
        await fetch('http://143.198.136.212/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName,
                nickname
            }
            ),
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(e => e.json())
            .then((e) => {
                callback(e.token, email);
                dispatch({ type: ON_AUTH, payload: {token: e.token, isAuth: true, email: email}});
            });
    } catch (error) {
        console.log(error)
    }
}



