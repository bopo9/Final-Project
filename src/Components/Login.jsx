import React from "react";

const Login = props => (
    <div className={'login isDark'}>
        <input className={'login__input input_login'} name={'email'} type="text"/>
        <input className={'login__input input_login'} name={'password'} type="password"/>
        <button className={'login__btn btn_login'}>Login</button>
    </div>
);

export default Login;